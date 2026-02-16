import React, { useState, useRef, useEffect, useCallback } from "react";

export default function FamilyTree() {
  const containerRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  
  // ID ھاسىل قىلىش فۇنكسىيەسى
  const generateId = () => {
    return "n_" + Date.now() + "_" + Math.random().toString(36).slice(2, 9);
  };

  // باشلانغۇچ مەلۇمات
  const initialNodes = () => {
    const rootId = generateId();
    const spouseId = generateId();
    const child1Id = generateId();
    const child2Id = generateId();
    
    return {
      [rootId]: {
        id: rootId,
        name: "ئاتا",
        x: 600,
        y: 100,
        parent: null,
        gender: "male",
        age: "45",
        bio: "ئائىلە باشلىقى، سودىگەر",
        photo: null,
        color: "#3B82F6",
        createdAt: new Date().toISOString()
      },
      [spouseId]: {
        id: spouseId,
        name: "ئانا",
        x: 800,
        y: 100,
        parent: null,
        gender: "female",
        age: "42",
        bio: "ئائىلە ئانىسى، مۇئەللىمە",
        photo: null,
        color: "#EC4899",
        spouse: rootId,
        createdAt: new Date().toISOString()
      },
      [child1Id]: {
        id: child1Id,
        name: "ئەخمەت",
        x: 550,
        y: 300,
        parent: rootId,
        gender: "male",
        age: "18",
        bio: "چوڭ ئوغۇل، ئۇنۋېرسىتېت ئوقۇغۇچىسى",
        photo: null,
        color: "#3B82F6",
        createdAt: new Date().toISOString()
      },
      [child2Id]: {
        id: child2Id,
        name: "ئائىشە",
        x: 850,
        y: 300,
        parent: rootId,
        gender: "female",
        age: "15",
        bio: "كىچىك قىز، ئوتتۇرا مەكتەپ ئوقۇغۇچىسى",
        photo: null,
        color: "#EC4899",
        createdAt: new Date().toISOString()
      }
    };
  };

  const [nodes, setNodes] = useState(() => {
    try {
      const raw = localStorage.getItem("familytree_nodes_v6");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Object.keys(parsed).length > 0) return parsed;
      }
    } catch (e) {
      console.error("LocalStorage خاتالىقى:", e);
    }
    return initialNodes();
  });

  const [selectedId, setSelectedId] = useState(() => {
    const initial = initialNodes();
    const keys = Object.keys(initial);
    return keys.length > 0 ? keys[0] : null;
  });
  
  const [form, setForm] = useState({ 
    name: "", 
    age: "", 
    bio: "", 
    gender: "male", 
    photoFile: null,
    photoPreview: null
  });
  
  const [relationToAdd, setRelationToAdd] = useState("child");
  const [targetId, setTargetId] = useState(null);
  const [showConnections, setShowConnections] = useState(true);
  const [connectionStyle, setConnectionStyle] = useState("curved");
  const [showNodeDetails, setShowNodeDetails] = useState(true);
  const [showMiniMap, setShowMiniMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editNodeId, setEditNodeId] = useState(null);

  // LocalStorage گە ساقلاش
  useEffect(() => {
    localStorage.setItem("familytree_nodes_v6", JSON.stringify(nodes));
  }, [nodes]);

  // بولاق رەڭگى
  const getGenderColor = useCallback((gender) => {
    switch(gender) {
      case "male": return "#3B82F6";
      case "female": return "#EC4899";
      case "other": return "#8B5CF6";
      default: return "#64748B";
    }
  }, []);

  // سۈرەت URL يارىتىش
  const createPhotoUrl = useCallback((file) => {
    if (file) {
      return URL.createObjectURL(file);
    }
    return null;
  }, []);

  // بالىلارنى تاپىش
  const childrenOf = useCallback((id) => {
    return Object.values(nodes).filter((n) => n.parent === id);
  }, [nodes]);

  // ئاتا-ئانىسىنى تاپىش
  const parentsOf = useCallback((id) => {
    const node = nodes[id];
    if (!node?.parent) return [];
    const parent = nodes[node.parent];
    if (!parent) return [];
    
    const parents = [parent];
    const spouseId = parent.spouse;
    if (spouseId && nodes[spouseId]) {
      parents.push(nodes[spouseId]);
    }
    return parents;
  }, [nodes]);

  // قېرىنداشلارنى تاپىش
  const siblingsOf = useCallback((id) => {
    const p = nodes[id]?.parent;
    if (!p) return [];
    return Object.values(nodes).filter((n) => n.parent === p && n.id !== id);
  }, [nodes]);

  // يولدىشىنى تاپىش
  const spouseOf = useCallback((id) => {
    const node = nodes[id];
    if (!node?.spouse) return null;
    return nodes[node.spouse];
  }, [nodes]);

  // بالىلار سانى
  const childrenCount = useCallback((id) => {
    return childrenOf(id).length;
  }, [childrenOf]);

  // نەسەل دەرىجىسى
  const generationLevel = useCallback((id) => {
    let level = 0;
    let node = nodes[id];
    while (node?.parent) {
      level++;
      node = nodes[node.parent];
    }
    return level;
  }, [nodes]);

  // يېڭى ئادەم ئورنىنى ھېسابلاش
  const computePositionFor = useCallback((relation, targetId) => {
    const t = nodes[targetId];
    if (!t) return { x: 300, y: 200 };
    
    const spacing = 220;
    const verticalSpacing = 180;
    
    switch(relation) {
      case "father":
        return { 
          x: t.x - spacing/2, 
          y: Math.max(20, t.y - verticalSpacing) 
        };
        
      case "mother":
        return { 
          x: t.x + spacing/2, 
          y: Math.max(20, t.y - verticalSpacing) 
        };
        
      case "spouse":
        const existingSpouse = spouseOf(targetId);
        if (existingSpouse) {
          return { 
            x: existingSpouse.x, 
            y: existingSpouse.y 
          };
        }
        return { 
          x: t.x + spacing, 
          y: t.y 
        };
        
      case "sibling":
        const sibs = siblingsOf(targetId);
        const side = sibs.length % 2 === 0 ? -1 : 1;
        const siblingSpacing = 180;
        return { 
          x: t.x + (side * siblingSpacing * Math.ceil((sibs.length + 1) / 2)), 
          y: t.y 
        };
        
      case "child":
        const kids = childrenOf(targetId);
        const spouse = spouseOf(targetId);
        const parentX = spouse ? (t.x + spouse.x) / 2 : t.x;
        const totalWidth = Math.min((kids.length + 1) * 200, 800);
        const startX = parentX - totalWidth / 2 + 100;
        return { 
          x: startX + kids.length * 200, 
          y: t.y + verticalSpacing 
        };
        
      default:
        return { x: t.x + spacing, y: t.y };
    }
  }, [nodes, spouseOf, siblingsOf, childrenOf]);

  // مۇناسىۋەت سىزىقىنى ھېسابلاش
  const calculateConnectionPath = useCallback((node1, node2, type = "parent") => {
    const x1 = node1.x + 110;
    const y1 = node1.y + 70;
    const x2 = node2.x + 110;
    const y2 = node2.y + 70;
    
    switch(connectionStyle) {
      case "straight":
        return `M ${x1} ${y1} L ${x2} ${y2}`;
        
      case "stepped":
        const midY = (y1 + y2) / 2;
        return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
        
      case "curved":
      default:
        if (type === "spouse") {
          const midX = (x1 + x2) / 2;
          const curveHeight = 30;
          return `M ${x1} ${y1} Q ${midX} ${y1 - curveHeight} ${x2} ${y2}`;
        } else if (type === "parent") {
          const controlY1 = y1 + 50;
          const controlY2 = y2 - 50;
          const midX = (x1 + x2) / 2;
          return `M ${x1} ${y1} C ${x1} ${controlY1} ${midX} ${controlY2} ${x2} ${y2}`;
        } else {
          const midY = (y1 + y2) / 2;
          return `M ${x1} ${y1} C ${x1} ${midY} ${x2} ${midY} ${x2} ${y2}`;
        }
    }
  }, [connectionStyle]);

  // يېڭى ئادەم قوشۇش
  const addPerson = useCallback((relation, targetIdLocal) => {
    const target = targetIdLocal || targetId || selectedId;
    if (!target) {
      alert("ئالاقىلىشىدىغان ئادەمنى تاللاڭ!");
      return;
    }

    const name = form.name.trim() || "نامسىز";
    const id = generateId();
    const pos = computePositionFor(relation, target);
    const color = getGenderColor(form.gender);
    
    let parent = null;
    let spouse = null;
    
    switch(relation) {
      case "father":
      case "mother":
        parent = nodes[target]?.parent;
        break;
      case "spouse":
        spouse = target;
        parent = nodes[target]?.parent;
        break;
      case "sibling":
        parent = nodes[target]?.parent;
        break;
      case "child":
        parent = target;
        break;
    }

    const photoUrl = form.photoFile ? createPhotoUrl(form.photoFile) : null;

    const newNode = {
      id,
      name,
      x: pos.x,
      y: pos.y,
      parent,
      spouse,
      gender: form.gender,
      age: form.age,
      bio: form.bio,
      photo: photoUrl,
      color,
      createdAt: new Date().toISOString()
    };

    setNodes(prev => ({ ...prev, [id]: newNode }));
    
    if (relation === "spouse") {
      setNodes(prev => ({
        ...prev,
        [target]: { ...prev[target], spouse: id }
      }));
    }

    setForm({ 
      name: "", 
      age: "", 
      bio: "", 
      gender: "male", 
      photoFile: null,
      photoPreview: null 
    });
    setSelectedId(id);
    
    // يېڭى قوشۇلغان نودنى كۆرۈنۈش دائىرىسىگە كەلتۈرۈش
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: pos.x - 400,
          top: pos.y - 300,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, [form, targetId, selectedId, nodes, computePositionFor, getGenderColor, createPhotoUrl]);

  // مەزمۇن يېڭىلاش
  const updateNode = useCallback((id, patch) => {
    setNodes(prev => ({ 
      ...prev, 
      [id]: { 
        ...prev[id], 
        ...patch,
        color: patch.gender ? getGenderColor(patch.gender) : prev[id].color,
        updatedAt: new Date().toISOString()
      } 
    }));
  }, [getGenderColor]);

  // تەھرىرلەش مودىسىنى قوزغىتىش
  const startEditNode = useCallback((id) => {
    const node = nodes[id];
    if (!node) return;
    
    setEditMode(true);
    setEditNodeId(id);
    setForm({
      name: node.name,
      age: node.age || "",
      bio: node.bio || "",
      gender: node.gender,
      photoFile: null,
      photoPreview: node.photo
    });
  }, [nodes]);

  // تەھرىرلەشنى ساقلاش
  const saveEditNode = useCallback(() => {
    if (!editNodeId) return;
    
    const photoUrl = form.photoFile ? createPhotoUrl(form.photoFile) : form.photoPreview;
    
    updateNode(editNodeId, {
      name: form.name.trim() || "نامسىز",
      age: form.age,
      bio: form.bio,
      gender: form.gender,
      photo: photoUrl
    });
    
    setEditMode(false);
    setEditNodeId(null);
    setForm({ 
      name: "", 
      age: "", 
      bio: "", 
      gender: "male", 
      photoFile: null,
      photoPreview: null 
    });
  }, [editNodeId, form, updateNode, createPhotoUrl]);

  // ئۆچۈرۈش
  const deleteNode = useCallback((id) => {
    const node = nodes[id];
    if (!node) return;
    
    if (window.confirm(`${node.name} نى ئۆچۈرەمسىز؟ بۇ ھەرىكەت قايتۇرۇلمايدۇ.`)) {
      const newNodes = { ...nodes };
      
      // بالىلارنى ئاتا-ئانىسىغا قايتۇرۇش
      Object.values(newNodes).forEach(n => {
        if (n.parent === id) {
          n.parent = node.parent;
        }
      });
      
      // يولداشنىڭ مۇناسىۋىتىنى ئۆچۈرۈش
      Object.values(newNodes).forEach(n => {
        if (n.spouse === id) {
          n.spouse = null;
        }
      });
      
      delete newNodes[id];
      setNodes(newNodes);
      
      if (selectedId === id) {
        const remainingIds = Object.keys(newNodes);
        setSelectedId(remainingIds.length > 0 ? remainingIds[0] : null);
      }
    }
  }, [nodes, selectedId]);

  // رەسىم يۈكلەش
  const handlePhotoUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("رەسىم ھەجىمى 5MB دىن چوڭ بولماسلىقى كېرەك!");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({
          ...prev,
          photoFile: file,
          photoPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // تازىلاش
  const clearAll = useCallback(() => {
    if (window.confirm("بارلىق ئائىلە مەلۇماتلىرىڭىز ئۆچۈرۈلىدۇ. داۋاملاشتۇرامسىز؟")) {
      const initial = initialNodes();
      setNodes(initial);
      const keys = Object.keys(initial);
      setSelectedId(keys.length > 0 ? keys[0] : null);
      setPanOffset({ x: 0, y: 0 });
      setZoomLevel(1);
    }
  }, []);

  // دەرىخى ئۆز ئورنىنى تەڭشەش
  const organizeTree = useCallback(() => {
    const newNodes = { ...nodes };
    const rootNodes = Object.values(newNodes).filter(n => !n.parent);
    
    if (rootNodes.length === 0) return;
    
    const startX = 600;
    const startY = 100;
    const horizontalSpacing = 250;
    const verticalSpacing = 200;
    
    // ئاساسىي جۈپلەرنى تەرتىپلەش
    rootNodes.forEach((node, index) => {
      node.x = startX + index * horizontalSpacing;
      node.y = startY;
    });
    
    // بالىلارنى تەرتىپلەش (رەقەملىك)
    const organizeChildren = (parentId, depth = 1) => {
      const children = Object.values(newNodes).filter(n => n.parent === parentId);
      if (children.length === 0) return;
      
      const parent = newNodes[parentId];
      const spouse = spouseOf(parentId);
      const parentCenterX = spouse ? (parent.x + spouse.x) / 2 : parent.x;
      
      children.forEach((child, index) => {
        const totalChildren = children.length;
        const childSpacing = Math.min(220, 800 / Math.max(totalChildren, 1));
        const startChildX = parentCenterX - ((totalChildren - 1) * childSpacing) / 2;
        
        child.x = startChildX + index * childSpacing;
        child.y = startY + depth * verticalSpacing;
        
        // نەۋە بالىلىرىنى تەرتىپلەش
        organizeChildren(child.id, depth + 1);
      });
    };
    
    // ھەر بىر تۇپ ئۈچۈن بالىلارنى تەرتىپلەش
    rootNodes.forEach(root => {
      organizeChildren(root.id);
    });
    
    setNodes(newNodes);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, [nodes, spouseOf]);

  // مۇناسىۋەت سىزىقلىرىنى رەسىملەش
  const renderConnections = useCallback(() => {
    const connections = [];
    
    Object.values(nodes).forEach(node => {
      // ئاتا-ئانا بىلەن بالا مۇناسىۋىتى
      if (node.parent && nodes[node.parent]) {
        const parent = nodes[node.parent];
        connections.push({
          from: parent,
          to: node,
          type: "parent",
          color: "#94a3b8",
          width: 2,
          dashArray: "5,3"
        });
      }
      
      // يولداش مۇناسىۋىتى (بىرلا قېتىم كۆرسىتىش ئۈچۈن)
      if (node.spouse && nodes[node.spouse] && node.id < node.spouse) {
        const spouse = nodes[node.spouse];
        connections.push({
          from: node,
          to: spouse,
          type: "spouse",
          color: "#f472b6",
          width: 2.5,
          dashArray: "none"
        });
      }
    });
    
    return connections;
  }, [nodes]);

  // نودنى سۆرەپ تاشلاش
  const handleNodeDrag = useCallback((id, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const startX = e.clientX;
    const startY = e.clientY;
    const node = nodes[id];
    const startNodeX = node.x;
    const startNodeY = node.y;
    
    const onMouseMove = (moveEvent) => {
      const dx = (moveEvent.clientX - startX) / zoomLevel;
      const dy = (moveEvent.clientY - startY) / zoomLevel;
      updateNode(id, {
        x: Math.max(20, Math.min(startNodeX + dx, 2000)),
        y: Math.max(20, Math.min(startNodeY + dy, 2000))
      });
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
    };
    
    document.body.style.cursor = 'grabbing';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [nodes, zoomLevel, updateNode]);

  // پان (سۆرەش) قىلىش
  const handlePanStart = useCallback((e) => {
    if (e.button !== 0) return; // چەپ توپچىلا
    e.preventDefault();
    setIsPanning(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    document.body.style.cursor = 'grabbing';
  }, []);

  const handlePanMove = useCallback((e) => {
    if (!isPanning) return;
    
    const dx = e.clientX - lastMousePos.x;
    const dy = e.clientY - lastMousePos.y;
    
    setPanOffset(prev => ({
      x: prev.x + dx / zoomLevel,
      y: prev.y + dy / zoomLevel
    }));
    
    setLastMousePos({ x: e.clientX, y: e.clientY });
  }, [isPanning, lastMousePos, zoomLevel]);

  const handlePanEnd = useCallback(() => {
    setIsPanning(false);
    document.body.style.cursor = 'default';
  }, []);

  // زۇم قىلىش
  const handleZoom = useCallback((direction) => {
    setZoomLevel(prev => {
      const newZoom = direction === 'in' 
        ? Math.min(prev + 0.2, 3)
        : Math.max(prev - 0.2, 0.3);
      return newZoom;
    });
  }, []);

  // سىستېمىغا چاپلاش
  const exportToJSON = useCallback(() => {
    const dataStr = JSON.stringify(nodes, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `family-tree-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [nodes]);

  // سىستېمىدىن ئوقۇش
  const importFromJSON = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedNodes = JSON.parse(event.target.result);
          if (typeof importedNodes === 'object' && importedNodes !== null) {
            setNodes(importedNodes);
            const firstId = Object.keys(importedNodes)[0];
            setSelectedId(firstId || null);
            alert("ئائىلە دەرىخى مۇۋەپپەقىيەتلىك يۈكلەندى!");
          } else {
            throw new Error("يۇمشاق دېتال格式ى خاتا");
          }
        } catch (error) {
          alert("JSON ھۆججىتىنى ئوقۇشتا خاتالىق: " + error.message);
        }
      };
      reader.readAsText(file);
    };
    
    input.click();
  }, []);

  // ئىزدەش
  const filteredNodes = useCallback(() => {
    if (!searchQuery.trim()) return Object.values(nodes);
    
    const query = searchQuery.toLowerCase();
    return Object.values(nodes).filter(node =>
      node.name.toLowerCase().includes(query) ||
      (node.age && node.age.toString().includes(query)) ||
      (node.bio && node.bio.toLowerCase().includes(query))
    );
  }, [nodes, searchQuery]);

  // مىنى-خەرىتە ھېسابلاش
  const calculateMiniMap = useCallback(() => {
    const allNodes = Object.values(nodes);
    if (allNodes.length === 0) return { minX: 0, maxX: 1000, minY: 0, maxY: 600 };
    
    const xs = allNodes.map(n => n.x);
    const ys = allNodes.map(n => n.y);
    
    return {
      minX: Math.min(...xs) - 100,
      maxX: Math.max(...xs) + 300,
      minY: Math.min(...ys) - 100,
      maxY: Math.max(...ys) + 300
    };
  }, [nodes]);

  // تولۇق ئۇچۇر پانېلى
  const renderFullInfoPanel = useCallback(() => {
    if (!selectedId || !nodes[selectedId]) return null;
    
    const node = nodes[selectedId];
    const parents = parentsOf(selectedId);
    const children = childrenOf(selectedId);
    const siblings = siblingsOf(selectedId);
    const spouse = spouseOf(selectedId);
    
    return (
      <div className="bg-white rounded-xl shadow-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">ئەزا تەپسىلاتى</h3>
          <button
            onClick={() => setShowNodeDetails(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-5">
          {/* ئاساسىي ئۇچۇر */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {node.photo ? (
                  <img 
                    src={node.photo} 
                    alt={node.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-3xl" 
                             style="background-color: ${node.color}30">
                          ${node.gender === 'male' ? '👨' : '👩'}
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${node.color}30` }}
                  >
                    {node.gender === 'male' ? '👨' : '👩'}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-2xl font-bold text-gray-800">{node.name}</h4>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${node.color}20`,
                    color: node.color
                  }}
                >
                  {node.gender === 'male' ? 'ئەر' : 'ئايال'}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-gray-600">
                <div>
                  <span className="font-medium">يېشى:</span> {node.age || 'مەلۇماتسىز'}
                </div>
                <div>
                  <span className="font-medium">نەسەل:</span> {generationLevel(selectedId) + 1}. ئەۋلاد
                </div>
                <div className="col-span-2">
                  <span className="font-medium">تەرجىمالى:</span>
                  <p className="mt-1 text-gray-700 bg-gray-50 p-3 rounded-lg">
                    {node.bio || 'تەرجىمىھال قوشۇلمىغان'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* مۇناسىۋەتلەر */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-gray-700">مۇناسىۋەتلەر</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* ئاتا-ئانا */}
              {parents.length > 0 && (
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-medium text-blue-700 mb-2">ئاتا-ئانا</div>
                  {parents.map(parent => (
                    <div key={parent.id} className="flex items-center gap-2 mb-1">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: parent.color }}
                      >
                        {parent.gender === 'male' ? '👨' : '👩'}
                      </div>
                      <span className="text-sm">{parent.name}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* قېرىنداشلار */}
              {siblings.length > 0 && (
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="font-medium text-green-700 mb-2">قېرىنداشلار ({siblings.length})</div>
                  {siblings.map(sib => (
                    <div key={sib.id} className="flex items-center gap-2 mb-1">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: sib.color }}
                      >
                        {sib.gender === 'male' ? '👨' : '👩'}
                      </div>
                      <span className="text-sm">{sib.name}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* بالىلار */}
              {children.length > 0 && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="font-medium text-purple-700 mb-2">بالىلار ({children.length})</div>
                  {children.map(child => (
                    <div key={child.id} className="flex items-center gap-2 mb-1">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: child.color }}
                      >
                        {child.gender === 'male' ? '👨' : '👩'}
                      </div>
                      <span className="text-sm">{child.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* يولداش */}
            {spouse && (
              <div className="bg-pink-50 p-3 rounded-lg">
                <div className="font-medium text-pink-700 mb-2">يولداش</div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full overflow-hidden"
                    style={{ backgroundColor: spouse.color }}
                  >
                    {spouse.photo ? (
                      <img 
                        src={spouse.photo} 
                        alt={spouse.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              ${spouse.gender === 'male' ? '👨' : '👩'}
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {spouse.gender === 'male' ? '👨' : '👩'}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{spouse.name}</div>
                    <div className="text-sm text-gray-600">{spouse.age} ياش</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* ھەرىكەتلەر */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={() => startEditNode(selectedId)}
              className="flex-1 p-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200"
            >
              تەھرىرلەش
            </button>
            <button
              onClick={() => deleteNode(selectedId)}
              className="flex-1 p-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200"
            >
              ئۆچۈرۈش
            </button>
          </div>
        </div>
      </div>
    );
  }, [selectedId, nodes, parentsOf, childrenOf, siblingsOf, spouseOf, generationLevel, startEditNode, deleteNode]);

  // مىنى-خەرىتە كومپونېنتى
  const renderMiniMap = useCallback(() => {
    if (!showMiniMap) return null;
    
    const bounds = calculateMiniMap();
    const width = 200;
    const height = 150;
    
    const scaleX = width / (bounds.maxX - bounds.minX);
    const scaleY = height / (bounds.maxY - bounds.minY);
    const scale = Math.min(scaleX, scaleY) * 0.8;
    
    return (
      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
        <div className="text-white text-xs font-medium mb-2">خەرىتە</div>
        <div className="relative" style={{ width, height }}>
          {/* مىنى-خەرىتە كۆزنىكى */}
          <div className="absolute inset-0 border border-white/30 rounded overflow-hidden">
            {/* مىنى-خەرىتە سىزىقلىرى */}
            <svg className="w-full h-full">
              {renderConnections().map((conn, index) => {
                const x1 = (conn.from.x - bounds.minX) * scale;
                const y1 = (conn.from.y - bounds.minY) * scale;
                const x2 = (conn.to.x - bounds.minX) * scale;
                const y2 = (conn.to.y - bounds.minY) * scale;
                
                return (
                  <line
                    key={`mini-${index}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={conn.color}
                    strokeWidth="1"
                  />
                );
              })}
              
              {/* مىنى-خەرىتە نودلىرى */}
              {Object.values(nodes).map((node) => {
                const x = (node.x - bounds.minX) * scale;
                const y = (node.y - bounds.minY) * scale;
                
                return (
                  <circle
                    key={`mini-node-${node.id}`}
                    cx={x}
                    cy={y}
                    r="3"
                    fill={node.color}
                    stroke="white"
                    strokeWidth="1"
                    className={`cursor-pointer ${selectedId === node.id ? 'stroke-2' : ''}`}
                    onClick={() => {
                      setSelectedId(node.id);
                      if (containerRef.current) {
                        containerRef.current.scrollTo({
                          left: node.x - 400,
                          top: node.y - 300,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  />
                );
              })}
            </svg>
          </div>
          
          {/* كۆزنىك ئورنى كۆرسەتكۈچى */}
          <div 
            className="absolute border-2 border-yellow-400 pointer-events-none"
            style={{
              left: (400 - bounds.minX) * scale,
              top: (300 - bounds.minY) * scale,
              width: 800 * scale,
              height: 600 * scale,
              opacity: 0.5
            }}
          />
        </div>
      </div>
    );
  }, [showMiniMap, nodes, selectedId, calculateMiniMap, renderConnections]);

  // ئاساسلىق كۆرۈنۈش
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setEditMode(false);
        setEditNodeId(null);
      }
      if (e.key === '+' || e.key === '=') {
        handleZoom('in');
      }
      if (e.key === '-') {
        handleZoom('out');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleZoom]);

  // پان (سۆرەش) قىلىش ئىشلەتكۈچى
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isPanning) {
        handlePanMove(e);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isPanning) {
        handlePanEnd();
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isPanning, handlePanMove, handlePanEnd]);

  // مەلۇماتلارنىڭ نورمالىزىسىيەسى
  useEffect(() => {
    if (!selectedId && Object.keys(nodes).length > 0) {
      setSelectedId(Object.keys(nodes)[0]);
    }
  }, [nodes, selectedId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* تىما جۈپلىكى */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            <span className="text-blue-600">ئائىلە دەرىخى</span> تەرتىپلىي كۆرسەتكۈچ
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ئائىلە ئەزالىرىڭىزنىڭ مۇناسىۋىتىنى كۆرۈنۈشلۈك كۆرسىتىش، تەرجىمىھاللىرىنى ساقلاش ۋە ئائىلە تارىخىڭىزنى ساقلاش
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* سول پانېل */}
          <div className="lg:w-80 space-y-4">
            {/* ئىزدەش پانېلى */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ئىزدەش..."
                  className="w-full p-3 pl-10 border rounded-lg bg-gray-50"
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  🔍
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              
              {searchQuery && (
                <div className="mt-3 max-h-60 overflow-y-auto">
                  {filteredNodes().map(node => (
                    <div
                      key={node.id}
                      className={`p-2 rounded-lg cursor-pointer mb-1 ${selectedId === node.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                      onClick={() => setSelectedId(node.id)}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                          style={{ backgroundColor: node.color }}
                        >
                          {node.gender === 'male' ? '👨' : '👩'}
                        </div>
                        <span className="font-medium">{node.name}</span>
                        {node.age && (
                          <span className="text-xs text-gray-500">({node.age}ي)</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* يېڭى ئەزا / تەھرىرلەش پانېلى */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                {editMode ? 'ئەزا تەھرىرلەش' : 'يېڭى ئەزا قوشۇش'}
              </h3>
              
              <div className="space-y-3">
                <input
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  placeholder="تولۇق ئىسمى"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={form.age}
                    onChange={(e) => setForm({...form, age: e.target.value})}
                    placeholder="يېشى"
                    className="flex-1 p-3 border rounded-lg"
                    min="0"
                    max="120"
                  />
                  <select
                    value={form.gender}
                    onChange={(e) => setForm({...form, gender: e.target.value})}
                    className="p-3 border rounded-lg bg-white"
                  >
                    <option value="male">👨 ئەر</option>
                    <option value="female">👩 ئايال</option>
                    <option value="other">👥 باشقا</option>
                  </select>
                </div>
                
                <textarea
                  value={form.bio}
                  onChange={(e) => setForm({...form, bio: e.target.value})}
                  placeholder="تەرجىمىھال (ئىش، تۇغۇلغان يېرى، قىزىقىشلىرى قاتارلىقلار)"
                  className="w-full p-3 border rounded-lg resize-none"
                  rows="3"
                />
                
                {/* رەسىم يۈكلەش */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">رەسىم:</span>
                    {form.photoPreview && (
                      <button
                        type="button"
                        onClick={() => setForm({...form, photoFile: null, photoPreview: null})}
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        ئۆچۈرۈش
                      </button>
                    )}
                  </div>
                  
                  {form.photoPreview ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={form.photoPreview} 
                        alt="Preview" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                      />
                      <span className="text-xs text-gray-500 mt-2">يۇقىرىدىكى رەسىم ئالماشتۇرۇلىدۇ</span>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="photo"
                        onChange={handlePhotoUpload}
                      />
                      <label htmlFor="photo" className="cursor-pointer block">
                        <div className="text-gray-400 mb-2">📷</div>
                        <div className="text-sm text-gray-600">رەسىم يۈكلەش (5MB چەكلىمىسى)</div>
                      </label>
                    </div>
                  )}
                </div>
                
                {!editMode && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        مۇناسىۋەت تىپى:
                      </label>
                      <select
                        value={relationToAdd}
                        onChange={(e) => setRelationToAdd(e.target.value)}
                        className="w-full p-3 border rounded-lg bg-white"
                      >
                        <option value="child">👶 بالا</option>
                        <option value="spouse">💑 يولداش</option>
                        <option value="father">👴 دادا</option>
                        <option value="mother">👵 ئانا</option>
                        <option value="sibling">👥 قېرىنداش</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        قوشۇلىدىغان ئادەم:
                      </label>
                      <select
                        value={targetId || selectedId || ""}
                        onChange={(e) => setTargetId(e.target.value)}
                        className="w-full p-3 border rounded-lg bg-white"
                      >
                        {Object.values(nodes).map((n) => (
                          <option key={n.id} value={n.id}>
                            {n.name} {n.age ? `(${n.age}ي)` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
                
                <div className="flex gap-2">
                  {editMode ? (
                    <>
                      <button
                        onClick={saveEditNode}
                        className="flex-1 p-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
                      >
                        ✓ ساقلاش
                      </button>
                      <button
                        onClick={() => {
                          setEditMode(false);
                          setEditNodeId(null);
                          setForm({ 
                            name: "", 
                            age: "", 
                            bio: "", 
                            gender: "male", 
                            photoFile: null,
                            photoPreview: null 
                          });
                        }}
                        className="flex-1 p-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition"
                      >
                        بىكار قىلىش
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => addPerson(relationToAdd, targetId)}
                      className="flex-1 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:opacity-90 transition shadow-lg"
                    >
                      ＋ ئەزا قوشۇش
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* سىستېما ھەرىكەتلىرى */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-3">سىستېما ھەرىكەتلىرى</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={exportToJSON}
                  className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  📥 چاپلاش
                </button>
                <button
                  onClick={importFromJSON}
                  className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  📤 يۈكلەش
                </button>
                <button
                  onClick={organizeTree}
                  className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  🔄 تەرتىپلەش
                </button>
                <button
                  onClick={clearAll}
                  className="p-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  🗑️ تازىلاش
                </button>
              </div>
            </div>
            
            {/* كۆرۈنۈش تەڭشەش */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-3">كۆرۈنۈش تەڭشەش</h3>
              
              <div className="space-y-4">
                {/* سىزىق كۆرسىتىش */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-gray-400"></div>
                    <span className="text-gray-700">مۇناسىۋەت سىزىقلىرى</span>
                  </div>
                  <button
                    onClick={() => setShowConnections(!showConnections)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showConnections ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showConnections ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                {/* مىنى-خەرىتە */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm border border-gray-400"></div>
                    <span className="text-gray-700">مىنى-خەرىتە</span>
                  </div>
                  <button
                    onClick={() => setShowMiniMap(!showMiniMap)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showMiniMap ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showMiniMap ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                {/* سىزىق شەكلى */}
                <div className="space-y-2">
                  <span className="text-gray-700">سىزىق شەكلى:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'curved', label: 'ئېگىز', icon: '↷' },
                      { id: 'straight', label: 'توغرا', icon: '↔' },
                      { id: 'stepped', label: 'باسقۇچ', icon: '⤴' }
                    ].map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setConnectionStyle(style.id)}
                        className={`flex flex-col items-center p-2 rounded-lg transition-all ${connectionStyle === style.id ? 'bg-blue-100 text-blue-700 border-2 border-blue-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        <span className="text-lg mb-1">{style.icon}</span>
                        <span className="text-xs">{style.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* زۇم تەڭشەش */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">زۇم: {Math.round(zoomLevel * 100)}%</span>
                    <button 
                      onClick={() => {
                        setZoomLevel(1);
                        setPanOffset({ x: 0, y: 0 });
                      }}
                      className="px-3 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      ئەسلىگە
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleZoom('out')}
                      className="flex-1 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center justify-center"
                    >
                      🔍−
                    </button>
                    <div className="flex-1">
                      <input
                        type="range"
                        min="30"
                        max="300"
                        value={zoomLevel * 100}
                        onChange={(e) => setZoomLevel(e.target.value / 100)}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <button 
                      onClick={() => handleZoom('in')}
                      className="flex-1 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center justify-center"
                    >
                      🔍＋
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* ئوتتۇرا ۋە ئوڭ پانېل */}
          <div className="flex-1 flex flex-col gap-6">
            {/* دەرىخى كۆرسىتىش قۇتىسى */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold text-gray-800">ئائىلە دەرىخى</h2>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {Object.values(nodes).length} ئەزا
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      {new Set(Object.values(nodes).filter(n => n.parent).map(n => n.parent)).size} ئائىلە
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {Math.max(...Object.values(nodes).map(n => generationLevel(n.id))) + 1} ئەۋلاد
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowNodeDetails(true)}
                    disabled={!selectedId}
                    className={`px-4 py-2 rounded-lg font-medium ${selectedId ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                  >
                    تەپسىلاتلار
                  </button>
                  <div className="text-xs text-gray-500">
                    چەپ توپچا بىلەن سۆرەڭ
                  </div>
                </div>
              </div>
              
              {/* دەرىخى كۆرسىتىش سۇپىسى */}
              <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border-2 border-gray-200 overflow-hidden">
                <div 
                  ref={containerRef}
                  className="relative w-full h-[600px] overflow-auto"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                    transformOrigin: 'top left',
                    cursor: isPanning ? 'grabbing' : 'grab'
                  }}
                  onMouseDown={handlePanStart}
                  onDoubleClick={(e) => {
                    if (e.target === containerRef.current) {
                      const rect = containerRef.current.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / zoomLevel - panOffset.x - 110;
                      const y = (e.clientY - rect.top) / zoomLevel - panOffset.y - 70;
                      
                      const name = prompt("يېڭى ئەزانىڭ ئىسمى:");
                      if (name) {
                        const id = generateId();
                        const newNode = {
                          id,
                          name,
                          x: Math.max(20, x),
                          y: Math.max(20, y),
                          parent: null,
                          gender: "male",
                          age: "",
                          bio: "",
                          photo: null,
                          color: getGenderColor("male"),
                          createdAt: new Date().toISOString()
                        };
                        setNodes(prev => ({ ...prev, [id]: newNode }));
                        setSelectedId(id);
                      }
                    }
                  }}
                >
                  {/* مۇناسىۋەت سىزىقلىرى */}
                  {showConnections && (
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      {renderConnections().map((conn, index) => {
                        const path = calculateConnectionPath(conn.from, conn.to, conn.type);
                        return (
                          <g key={`${conn.from.id}-${conn.to.id}-${index}`}>
                            <path
                              d={path}
                              stroke={conn.color}
                              strokeWidth={conn.width}
                              fill="none"
                              strokeDasharray={conn.dashArray}
                              className="opacity-80"
                            />
                            
                            {/* مۇناسىۋەت كۆرسەتكۈچى */}
                            {connectionStyle === 'curved' && (
                              <>
                                <path
                                  d={path}
                                  stroke="transparent"
                                  strokeWidth="20"
                                  fill="none"
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setSelectedId(conn.from.id);
                                  }}
                                />
                                
                                {/* مۇناسىۋەت بەلگىسى */}
                                <circle 
                                  cx={(conn.from.x + conn.to.x) / 2 + 110} 
                                  cy={(conn.from.y + conn.to.y) / 2 + 70} 
                                  r="14" 
                                  fill="white" 
                                  stroke={conn.color}
                                  strokeWidth="2"
                                  className="cursor-pointer shadow-sm"
                                  onClick={() => {
                                    setSelectedId(conn.from.id);
                                  }}
                                />
                                <text 
                                  x={(conn.from.x + conn.to.x) / 2 + 110} 
                                  y={(conn.from.y + conn.to.y) / 2 + 70} 
                                  textAnchor="middle" 
                                  dominantBaseline="middle" 
                                  fontSize="10" 
                                  fontWeight="bold"
                                  fill={conn.color}
                                  className="pointer-events-none"
                                >
                                  {conn.type === "parent" ? "↓" : 
                                   conn.type === "spouse" ? "♥" : "↔"}
                                </text>
                              </>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  )}
                  
                  {/* ئەزالار (نودلار) */}
                  {Object.values(nodes).map((node) => {
                    const isSelected = selectedId === node.id;
                    const childrenCount = childrenOf(node.id).length;
                    const spouse = spouseOf(node.id);
                    
                    return (
                      <div
                        key={node.id}
                        className={`absolute transition-all duration-300 ease-out ${isSelected ? 'z-50' : 'z-10 hover:z-30'}`}
                        style={{
                          left: `${node.x}px`,
                          top: `${node.y}px`,
                          width: '240px',
                          filter: isSelected ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.07))'
                        }}
                        onMouseDown={(e) => {
                          if (e.button === 0) { // چەپ توپچى
                            setSelectedId(node.id);
                            handleNodeDrag(node.id, e);
                          }
                        }}
                        onDoubleClick={() => startEditNode(node.id)}
                      >
                        <div className={`bg-white rounded-xl overflow-hidden transition-all duration-200 ${isSelected ? 'ring-3 ring-blue-400 scale-105' : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-blue-300 hover:scale-102'}`}>
                          {/* ئەزا باش بۆلۈمى */}
                          <div 
                            className="p-4 relative"
                            style={{ 
                              backgroundColor: `${node.color}10`,
                              borderBottom: `1px solid ${node.color}30`
                            }}
                          >
                            <div className="flex items-start gap-3">
                              {/* سۈرەت ياكى ئىكون */}
                              <div className="flex-shrink-0">
                                <div 
                                  className="w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-md"
                                  style={{ backgroundColor: node.color }}
                                >
                                  {node.photo ? (
                                    <img 
                                      src={node.photo} 
                                      alt={node.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        // رەسىم يۈكلەش خاتالىقىدا ئىكوننى كۆرسىتىش
                                        const parent = e.target.parentElement;
                                        if (parent) {
                                          e.target.style.display = 'none';
                                          const fallback = document.createElement('div');
                                          fallback.className = 'w-full h-full flex items-center justify-center text-2xl';
                                          fallback.style.backgroundColor = node.color + '30';
                                          fallback.textContent = node.gender === 'male' ? '👨' : '👩';
                                          parent.appendChild(fallback);
                                        }
                                      }}
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-2xl">
                                      {node.gender === 'male' ? '👨' : '👩'}
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* ئاساسىي ئۇچۇرلار */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-1">
                                  <h4 className="font-bold text-lg text-gray-800 truncate">
                                    {node.name}
                                  </h4>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      deleteNode(node.id);
                                    }}
                                    className="text-gray-400 hover:text-red-500 p-1"
                                  >
                                    ✕
                                  </button>
                                </div>
                                
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-sm font-medium text-gray-700">
                                    {node.age || '؟'} ياش
                                  </span>
                                  <span 
                                    className="px-2 py-0.5 text-xs font-bold rounded-full uppercase"
                                    style={{ 
                                      backgroundColor: `${node.color}30`,
                                      color: node.color
                                    }}
                                  >
                                    {node.gender === 'male' ? 'ئەر' : node.gender === 'female' ? 'ئايال' : 'باشقا'}
                                  </span>
                                </div>
                                
                                {/* نەسەل ۋە بالىلار سانى */}
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                  {generationLevel(node.id) > 0 && (
                                    <span className="flex items-center gap-1">
                                      <span className="text-blue-500">🏛️</span>
                                      {generationLevel(node.id) + 1}. ئەۋلاد
                                    </span>
                                  )}
                                  
                                  {childrenCount > 0 && (
                                    <span className="flex items-center gap-1">
                                      <span className="text-green-500">👶</span>
                                      {childrenCount} بالا
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            {/* تەرجىمىھال قىسقىچە */}
                            {node.bio && (
                              <div className="mt-3 pt-3 border-t border-gray-100">
                                <p className="text-xs text-gray-600 line-clamp-2">
                                  {node.bio}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {/* ئاستىنقى بۆلۈم (يولداش ۋە باشقۇرۇش ئۇچۇن) */}
                          <div className="p-3 bg-gray-50">
                            <div className="flex items-center justify-between">
                              {spouse && (
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full overflow-hidden">
                                    {spouse.photo ? (
                                      <img 
                                        src={spouse.photo} 
                                        alt={spouse.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                          e.target.parentElement.innerHTML = `
                                            <div class="w-full h-full flex items-center justify-center text-xs" style="background-color: ${spouse.color}">
                                              ${spouse.gender === 'male' ? '👨' : '👩'}
                                            </div>
                                          `;
                                        }}
                                      />
                                    ) : (
                                      <div 
                                        className="w-full h-full flex items-center justify-center text-xs"
                                        style={{ backgroundColor: spouse.color }}
                                      >
                                        {spouse.gender === 'male' ? '👨' : '👩'}
                                      </div>
                                    )}
                                  </div>
                                  <span className="text-xs font-medium text-gray-700">
                                    {spouse.name}
                                  </span>
                                </div>
                              )}
                              
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    startEditNode(node.id);
                                  }}
                                  className="p-1 text-gray-500 hover:text-blue-600"
                                  title="تەھرىرلەش"
                                >
                                  ✎
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setTargetId(node.id);
                                    setRelationToAdd("child");
                                  }}
                                  className="p-1 text-gray-500 hover:text-green-600"
                                  title="بالا قوشۇش"
                                >
                                  👶+
                                </button>
                                {!spouse && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setTargetId(node.id);
                                      setRelationToAdd("spouse");
                                    }}
                                    className="p-1 text-gray-500 hover:text-pink-600"
                                    title="يولداش قوشۇش"
                                  >
                                    💑+
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* تۆۋەنكى ئۇچۇر پانېلى */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-md">
                    <div className="flex items-center flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span>ئەر</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                        <span>ئايال</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-gray-400"></div>
                        <span>ئاتا-ئانا</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-pink-400"></div>
                        <span>يولداش</span>
                      </div>
                      <div className="text-xs opacity-80 mt-1">
                        ↕ سۆرەش | 💾 ساقلاش | 🔍 زۇم | قوش تېپىش بىلەن قوشۇش
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* مىنى-خەرىتە */}
                {renderMiniMap()}
              </div>
            </div>
            
            {/* تەپسىلات پانېلى (ئوڭ تەرەپ) */}
            {showNodeDetails && selectedId && nodes[selectedId] && (
              <div className="lg:w-96">
                {renderFullInfoPanel()}
              </div>
            )}
          </div>
        </div>
        
        {/* پۇت بۆلۈمى */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div>
              <span className="font-medium">ئائىلە دەرىخى كۆرسەتكۈچى</span> - بارلىق مەلۇماتلار يەرلىك ساقلانغان
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <span>ئىشلەتكۈچىلەر سانى: {Object.keys(nodes).length}</span>
              <span>ئەڭ سوڭقى يېڭىلانغان: {new Date().toLocaleDateString('ug-CN')}</span>
              <button
                onClick={() => {
                  const rootNode = Object.values(nodes).find(n => !n.parent);
                  if (rootNode) {
                    setSelectedId(rootNode.id);
                    if (containerRef.current) {
                      containerRef.current.scrollTo({
                        left: rootNode.x - 400,
                        top: rootNode.y - 300,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                باش ئەزاغا قايتىش
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}