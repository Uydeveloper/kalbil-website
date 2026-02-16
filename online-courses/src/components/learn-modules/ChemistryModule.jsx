// src/components/learn-modules/ChemistryModule.jsx
import React, { useState } from 'react';

// 🌟 تولۇق دەۋرىي جەدۋەل مەلۇماتى (118 ئېلېمېنت)
const elements = [
  // 1-20
  { number: 1, symbol: 'H', name: 'Hydrogen', weight: 1.008, state: 'gas', category: 'nonmetal', color: '#c9e4ca' },
  { number: 2, symbol: 'He', name: 'Helium', weight: 4.0026, state: 'gas', category: 'noble gas', color: '#f7d9c4' },
  { number: 3, symbol: 'Li', name: 'Lithium', weight: 6.94, state: 'solid', category: 'alkali metal', color: '#ffcccb' },
  { number: 4, symbol: 'Be', name: 'Beryllium', weight: 9.0122, state: 'solid', category: 'alkaline earth metal', color: '#ffb347' },
  { number: 5, symbol: 'B', name: 'Boron', weight: 10.81, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 6, symbol: 'C', name: 'Carbon', weight: 12.011, state: 'solid', category: 'nonmetal', color: '#baffc9' },
  { number: 7, symbol: 'N', name: 'Nitrogen', weight: 14.007, state: 'gas', category: 'nonmetal', color: '#c9e4ca' },
  { number: 8, symbol: 'O', name: 'Oxygen', weight: 15.999, state: 'gas', category: 'nonmetal', color: '#c9e4ca' },
  { number: 9, symbol: 'F', name: 'Fluorine', weight: 18.998, state: 'gas', category: 'halogen', color: '#ffdfba' },
  { number: 10, symbol: 'Ne', name: 'Neon', weight: 20.180, state: 'gas', category: 'noble gas', color: '#f7d9c4' },
  { number: 11, symbol: 'Na', name: 'Sodium', weight: 22.990, state: 'solid', category: 'alkali metal', color: '#ffcccb' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', weight: 24.305, state: 'solid', category: 'alkaline earth metal', color: '#ffb347' },
  { number: 13, symbol: 'Al', name: 'Aluminum', weight: 26.982, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 14, symbol: 'Si', name: 'Silicon', weight: 28.085, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 15, symbol: 'P', name: 'Phosphorus', weight: 30.974, state: 'solid', category: 'nonmetal', color: '#baffc9' },
  { number: 16, symbol: 'S', name: 'Sulfur', weight: 32.06, state: 'solid', category: 'nonmetal', color: '#c9e4ca' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', weight: 35.45, state: 'gas', category: 'halogen', color: '#ffdfba' },
  { number: 18, symbol: 'Ar', name: 'Argon', weight: 39.948, state: 'gas', category: 'noble gas', color: '#f7d9c4' },
  { number: 19, symbol: 'K', name: 'Potassium', weight: 39.098, state: 'solid', category: 'alkali metal', color: '#ffcccb' },
  { number: 20, symbol: 'Ca', name: 'Calcium', weight: 40.078, state: 'solid', category: 'alkaline earth metal', color: '#ffb347' },

  // 21-36
  { number: 21, symbol: 'Sc', name: 'Scandium', weight: 44.956, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 22, symbol: 'Ti', name: 'Titanium', weight: 47.867, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 23, symbol: 'V', name: 'Vanadium', weight: 50.942, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 24, symbol: 'Cr', name: 'Chromium', weight: 51.996, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 25, symbol: 'Mn', name: 'Manganese', weight: 54.938, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 26, symbol: 'Fe', name: 'Iron', weight: 55.845, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 27, symbol: 'Co', name: 'Cobalt', weight: 58.933, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 28, symbol: 'Ni', name: 'Nickel', weight: 58.693, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 29, symbol: 'Cu', name: 'Copper', weight: 63.546, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 30, symbol: 'Zn', name: 'Zinc', weight: 65.38, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 31, symbol: 'Ga', name: 'Gallium', weight: 69.723, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 32, symbol: 'Ge', name: 'Germanium', weight: 72.630, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 33, symbol: 'As', name: 'Arsenic', weight: 74.922, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 34, symbol: 'Se', name: 'Selenium', weight: 78.971, state: 'solid', category: 'nonmetal', color: '#c9e4ca' },
  { number: 35, symbol: 'Br', name: 'Bromine', weight: 79.904, state: 'liquid', category: 'halogen', color: '#ffdfba' },
  { number: 36, symbol: 'Kr', name: 'Krypton', weight: 83.798, state: 'gas', category: 'noble gas', color: '#f7d9c4' },

  // 37-54
  { number: 37, symbol: 'Rb', name: 'Rubidium', weight: 85.468, state: 'solid', category: 'alkali metal', color: '#ffcccb' },
  { number: 38, symbol: 'Sr', name: 'Strontium', weight: 87.62, state: 'solid', category: 'alkaline earth metal', color: '#ffb347' },
  { number: 39, symbol: 'Y', name: 'Yttrium', weight: 88.906, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', weight: 91.224, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 41, symbol: 'Nb', name: 'Niobium', weight: 92.906, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', weight: 95.95, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 43, symbol: 'Tc', name: 'Technetium', weight: 98, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', weight: 101.07, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', weight: 102.91, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 46, symbol: 'Pd', name: 'Palladium', weight: 106.42, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 47, symbol: 'Ag', name: 'Silver', weight: 107.87, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', weight: 112.41, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 49, symbol: 'In', name: 'Indium', weight: 114.82, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 50, symbol: 'Sn', name: 'Tin', weight: 118.71, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 51, symbol: 'Sb', name: 'Antimony', weight: 121.76, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 52, symbol: 'Te', name: 'Tellurium', weight: 127.60, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 53, symbol: 'I', name: 'Iodine', weight: 126.90, state: 'solid', category: 'halogen', color: '#ffdfba' },
  { number: 54, symbol: 'Xe', name: 'Xenon', weight: 131.29, state: 'gas', category: 'noble gas', color: '#f7d9c4' },

  // 55-71 (6-قۇر + لانتانىد)
  { number: 55, symbol: 'Cs', name: 'Cesium', weight: 132.91, state: 'solid', category: 'alkali metal', color: '#ffcccb' },
  { number: 56, symbol: 'Ba', name: 'Barium', weight: 137.33, state: 'solid', category: 'alkaline earth metal', color: '#ffb347' },
  { number: 57, symbol: 'La', name: 'Lanthanum', weight: 138.91, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 58, symbol: 'Ce', name: 'Cerium', weight: 140.12, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', weight: 140.91, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', weight: 144.24, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 61, symbol: 'Pm', name: 'Promethium', weight: 145, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 62, symbol: 'Sm', name: 'Samarium', weight: 150.36, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 63, symbol: 'Eu', name: 'Europium', weight: 151.96, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', weight: 157.25, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 65, symbol: 'Tb', name: 'Terbium', weight: 158.93, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', weight: 162.50, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 67, symbol: 'Ho', name: 'Holmium', weight: 164.93, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 68, symbol: 'Er', name: 'Erbium', weight: 167.26, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 69, symbol: 'Tm', name: 'Thulium', weight: 168.93, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', weight: 173.05, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', weight: 174.97, state: 'solid', category: 'lanthanide', color: '#d8b5ff' },

  // 72-86 (6-قۇر داۋامى)
  { number: 72, symbol: 'Hf', name: 'Hafnium', weight: 178.49, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', weight: 180.95, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 74, symbol: 'W', name: 'Tungsten', weight: 183.84, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 75, symbol: 'Re', name: 'Rhenium', weight: 186.21, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 76, symbol: 'Os', name: 'Osmium', weight: 190.23, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 77, symbol: 'Ir', name: 'Iridium', weight: 192.22, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 78, symbol: 'Pt', name: 'Platinum', weight: 195.08, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 79, symbol: 'Au', name: 'Gold', weight: 196.97, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 80, symbol: 'Hg', name: 'Mercury', weight: 200.59, state: 'liquid', category: 'transition metal', color: '#a2c8ec' },
  { number: 81, symbol: 'Tl', name: 'Thallium', weight: 204.38, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 82, symbol: 'Pb', name: 'Lead', weight: 207.2, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', weight: 208.98, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 84, symbol: 'Po', name: 'Polonium', weight: 209, state: 'solid', category: 'metalloid', color: '#ffdfba' },
  { number: 85, symbol: 'At', name: 'Astatine', weight: 210, state: 'solid', category: 'halogen', color: '#ffdfba' },
  { number: 86, symbol: 'Rn', name: 'Radon', weight: 222, state: 'gas', category: 'noble gas', color: '#f7d9c4' },

  // 87-103 (7-قۇر + ئاكتىنىد)
  { number: 87, symbol: 'Fr', name: 'Francium', weight: 223, state: 'solid', category: 'alkali metal', color: '#ffcccb' },
  { number: 88, symbol: 'Ra', name: 'Radium', weight: 226, state: 'solid', category: 'alkaline earth metal', color: '#ffb347' },
  { number: 89, symbol: 'Ac', name: 'Actinium', weight: 227, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 90, symbol: 'Th', name: 'Thorium', weight: 232.04, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', weight: 231.04, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 92, symbol: 'U', name: 'Uranium', weight: 238.03, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 93, symbol: 'Np', name: 'Neptunium', weight: 237, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', weight: 244, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 95, symbol: 'Am', name: 'Americium', weight: 243, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 96, symbol: 'Cm', name: 'Curium', weight: 247, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', weight: 247, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 98, symbol: 'Cf', name: 'Californium', weight: 251, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', weight: 252, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 100, symbol: 'Fm', name: 'Fermium', weight: 257, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', weight: 258, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 102, symbol: 'No', name: 'Nobelium', weight: 259, state: 'solid', category: 'actinide', color: '#d8b5ff' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', weight: 262, state: 'solid', category: 'actinide', color: '#d8b5ff' },

  // 104-118 (7-قۇر داۋامى)
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', weight: 267, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 105, symbol: 'Db', name: 'Dubnium', weight: 268, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', weight: 269, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', weight: 270, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 108, symbol: 'Hs', name: 'Hassium', weight: 269, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', weight: 278, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', weight: 281, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', weight: 282, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', weight: 285, state: 'solid', category: 'transition metal', color: '#a2c8ec' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', weight: 286, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', weight: 289, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', weight: 288, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', weight: 293, state: 'solid', category: 'post-transition metal', color: '#a2c8ec' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', weight: 294, state: 'solid', category: 'halogen', color: '#ffdfba' },
  { number: 118, symbol: 'Og', name: 'Oganesson', weight: 294, state: 'solid', category: 'noble gas', color: '#f7d9c4' },
];

// دەۋرىي جەدۋەلنى تەرتىپلەش (18 ستون)
const buildPeriodicTable = () => {
  const positions = {};
  elements.forEach(el => {
    positions[el.number] = el;
  });

  // قۇر (row) بويىچە 118 ئېلېمېنتنىڭ ئورنىنى بېكىتىش
  const layout = [
    // 1-قۇر
    [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    // 2-قۇر
    [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
    // 3-قۇر
    [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
    // 4-قۇر
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    // 5-قۇر
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    // 6-قۇر
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    // 7-قۇر
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    // لانتانىد (57-71)
    [null, null, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, null],
    // ئاكتىنىد (89-103)
    [null, null, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, null]
  ];

  return layout.map((row, rowIndex) => (
    row.map(pos => pos ? positions[pos] : null)
  ));
};

const ChemistryModule = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null); // ⭐ دەۋرىي جەدۋەل ئۈچۈن

  const topics = [
    {
      id: 'atoms-molecules',
      title: 'ئاتوم ۋە مولېكۇلا',
      description: 'ماددىلارنىڭ ئاساسىي بۆلەكچىلىرى ۋە ئۇلارنىڭ قۇرۇلۇشى',
      icon: '⚛️',
      fullContent: {
        introduction: `ئاتوم — ماددىنىڭ ئەڭ كىچىك بۆلەكچىسى. مولېكۇلا — ئاتوملارنىڭ بىرلىكتە تۇرۇشىدىن ھاسىل بولغان ماددا.`,
        mainContent: [
          {
            title: 'ئاتوم قۇرۇلمىسى',
            content: `
              ئاتوم 3 قىسىمدىن تۈزۈلگەن:
              
              • **نۇۋە** (نېيكىي): پروتون (+) ۋە نۆيترون (0)
              • **ئېلېكترونلار** (-): نۇۋە ئەتراپىدا ئوربىتالدا
              • **خالىت** (قۇرۇق): ئاتومنىڭ كۆپىنچە قۇرۇق
              
              [ئاتوم قۇرۇلمىسى]
                  ╭────────────╮
                  │  ئېلېكترون │ ← (-)
                  │     ↻      │
                  │   ● نۇۋە   │ ← (+) (0)
                  │     ↺      │
                  │  ئېلېكترون │ ← (-)
                  ╰────────────╯
            `,
            diagram: `
              ماسلىتىش:
              پروتون = ئاتوم نومۇرى
              ئېلېكترون = پروتون سانى (نېيتىرال ئاتومدا)
              نۆيترون = ئاتوم مەسىلىس - ئاتوم نومۇرى
            `
          },
          {
            title: 'مولېكۇلا قۇرۇلمىسى',
            content: `
              مولېكۇلا — ئاتوملارنىڭ كىمىيىلىك باغ بىلەن بەستەلگەن ھالىتى.
              
              مىساللار:
              • سۇ (H₂O): 2H + 1O
              • كاربون دىئوكسىد (CO₂): 1C + 2O
              • تۇز (NaCl): Na⁺ + Cl⁻
              
              [سۇ مولېكۇلا]
                 H
                  \
                   O
                  /
                 H
            `,
            formula: 'H₂O, CO₂, NaCl'
          }
        ],
        keyConcepts: [
          { term: 'ئاتوم', definition: 'ماددىنىڭ كىمىيىلىك جەھەتتىن بۆلىنمەيدىغان ئەڭ كىچىك بۆلەكچىسى' },
          { term: 'مولېكۇلا', definition: 'ئىككى ياكى ئۇنىڭدىن كۆپ ئاتوملارنىڭ بىرلىكتە تۇرۇشى' },
          { term: 'ئېلېكترون', definition: 'نۇۋە ئەتراپىدا ھەرىكەت قىلىدىغان مەنفىي بۆلەكچە' },
          { term: 'پروتون', definition: 'نۇۋە ئىچىدىكى مۇسبەت بۆلەكچە' },
          { term: 'كىمىيىلىك باغ', definition: 'ئاتوملارنى بىر-بىرىگە باغلايدىغان كۈچ' }
        ],
        applications: `
          ئاساسىي قوللىنىش:
          
          🔬 ماددىلارنى سىنلاش
          🔬 دورىلارنى تەييارلاش
          🔬 تەبىئى گازنى پايدىلىنىش
          🔬 سۇ سۈزگۈچ سىستېمىلىرى
        `
      }
    },
    {
      id: 'chemical-reactions',
      title: 'خىمىيىلىك رېئاكىسىيە',
      description: 'ماددىلار ئۆز-ئارا ئالماشىپ يېڭى ماددا ھاسىل قىلىش جەريانى',
      icon: '🔥',
      fullContent: {
        introduction: `خىمىيىلىك رېئاكىسىيە — بىر ياكى بىر قانچە ماددىلار ئۆز-ئارا تەسىر قىلىش ئارقىلىق يېڭى ماددىلارنى ھاسىل قىلىش جەريانى.`,
        mainContent: [
          {
            title: 'رېئاكىسىيە تىپلىرى',
            content: `
              **1. قوشۇش رېئاكىسىيە**: A + B → AB  
              **2. ئايرىلىش رېئاكىسىيە**: AB → A + B  
              **3. ئالماشتۇرۇش رېئاكىسىيە**: A + BC → AC + B  
              **4. ئالماش-ئالماشتۇرۇش**: AB + CD → AD + CB
              
              [رېئاكىسىيە تۈرلىرى]
              قوشۇش:   H₂ + O₂ → H₂O
              ئايرىلىش: H₂O → H₂ + O₂
              ئالماشتۇرۇش: Zn + 2HCl → ZnCl₂ + H₂
            `,
            formula: 'A + B → AB'
          },
          {
            title: 'رېئاكىسىيە مۇۋازىنىتى',
            content: `
              **خىمىيىلىك تەڭلىمە مۇۋازىنىتى** — رېئاكىسىيە ئالدى ۋە كېيىنكى ئاتوم سانى تەڭ بولۇشى كېرەك.
              
              مىسال: 
              ئەگەر:  H₂ + O₂ → H₂O  (خاتا!)
              توغرا: 2H₂ + O₂ → 2H₂O  (تۆگۈن!)
              
              [مۇۋازىنىت تەھلىلى]
              سول تەرەپ: 4H, 2O
              ئوڭ تەرەپ: 4H, 2O → مۇۋازىنىت!
            `,
            formula: '2H₂ + O₂ → 2H₂O'
          }
        ],
        keyConcepts: [
          { term: 'خىمىيىلىك رېئاكىسىيە', definition: 'ماددىلار ئۆز-ئارا تەسىر قىلىپ يېڭى ماددا ھاسىل قىلىش' },
          { term: 'رېئاكىسىيە مۇۋازىنىتى', definition: 'رېئاكىسىيە ئالدى ۋە كېيىنكى ئاتوم سانى تەڭ بولۇشى' },
          { term: 'كاتالىزاتور', definition: 'رېئاكىسىيە تېزلىكىنى ئاشۇرىدىغان، ئۆزى ئۆزگەرمەيدىغان ماددا' },
          { term: 'ئېكزوگېر مۇكىدار', definition: 'ئىسسىقلىق چىقارغان رېئاكىسىيە' },
          { term: 'ئېندوگېر مۇكىدار', definition: 'ئىسسىقلىق سىيىرىپ ئالغان رېئاكىسىيە' }
        ],
        applications: `
          قوللىنىش:
          
          🔥 يانغىن سۆندۈرۈش
          🔥 خېمىيىلىك باتارېيىكىلار
          🔥 دورىلار ئىشلەپچىقىرىش
          🔥 ئوغۇل-توكۇم ئىشلەپچىقىرىش
        `
      }
    },
    {
      id: 'acids-bases',
      title: 'كىسلىك ۋە ئاساسىيلىك',
      description: 'ماددىلارنىڭ pH قىممىتى ۋە خۇسۇسىيىتى',
      icon: '🧪',
      fullContent: {
        introduction: `كىسلىك ۋە ئاساسىيلىك — ماددا سۇغا ئەرگەندە ھاسىل قىلىدىغان ھىدروگېن ياكى گىدرۆكسىد ئىونلار بىلەن بەلگىلىنىدۇ.`,
        mainContent: [
          {
            title: 'pH شكالىسى',
            content: `
              pH شكالىسى 0 دىن 14 گىچە:
              
              • **pH < 7**: كىسلىك (مىسال: لىمۇن شىرەسى، سۈت)
              • **pH = 7**: نېيتىرال (مىسال: سۇ)
              • **pH > 7**: ئاساسىي (مىسال: ساۋۇن، ئاممۇنىيا)
              
              [pH شكالىسى]
              0    2    4    6    7    8    10   12   14
              🔴🔴🔴🔴🟡🟡🟢🟢🟢🟢🟢🟢🟢🟢
              كىسلىك        نېيتىرال       ئاساسىي
            `,
            formula: 'pH = -log₁₀[H⁺]'
          },
          {
            title: 'ئىندىكاتۇرلار',
            content: `
              **لىتىمۇس قەغىزى** — كىسلىك-ئاساسىيلىكنى بايقاش ئۈچۈن:
              
              • كىسلىك: قىزىل
              • ئاساسىي: كۆك
              • نېيتىرال: جۇنبۇرۇق
              
              [تەجرىبە]
              لىمۇن شىرەسى + لىتىمۇس → قىزىل
              ساۋۇن سۇ + لىتىمۇس → كۆك
            `,
            diagram: 'قىزىل ← كىسلىك | جۇنبۇرۇق ← نېيتىرال | كۆك ← ئاساسىي'
          }
        ],
        keyConcepts: [
          { term: 'pH', definition: 'ھىدروگېن ئىون كونسېنتراتسىيىسىنىڭ لوگارىپھمى' },
          { term: 'كىسلىك', definition: 'سۇغا ئەرگەندە H⁺ ئىون چىقارغان ماددا' },
          { term: 'ئاساس', definition: 'سۇغا ئەرگەندە OH⁻ ئىون چىقارغان ماددا' },
          { term: 'لىتىمۇس', definition: 'كىسلىك-ئاساسىيلىكنى كۆرسىتىدىغان رەڭلىك قەغىز' },
          { term: 'نېيتىراللاشتۇرۇش', definition: 'كىسلىك بىلەن ئاساس رېئاكىسىيە قىلىپ نېيتىرال ماددا ھاسىل قىلىش' }
        ],
        applications: `
          قوللىنىش:
          
          🧪 تۇپراق سىناش
          🧪 يۈزگە سۇس سۈزگۈچ سۇ
          🧪 پەرزەنت تەمەككۈرلۇك دورىلار
          🧪 سانئەت زېھىرلىنىشىنى نۆتىرىزلاش
        `
      }
    },
    {
      id: 'periodic-table',
      title: 'دەۋرىي جەدۋەل',
      description: 'بارلىق ئېلېمېنتلارنىڭ تەرتىپلىك جەدۋىلى',
      icon: '📊',
      fullContent: {
        introduction: 'دەۋرىي جەدۋەل — 118 ئېلېمېنتنى ئاتوم نومۇرى بويىچە تەرتىپلىگەن جەدۋەل. ھەر بىر ئېلېمېنتنى چەككەندە ئۇنىڭ تولۇق مەلۇماتىنى كۆرۈڭ.',
        mainContent: [], // دەۋرىي جەدۋەل ئۆزى بىر قانچە قۇرۇلمىسى بار، شۇڭا بۇ يەر بۆش
        keyConcepts: [
          { term: 'دەۋرىي جەدۋەل', definition: 'ئېلېمېنتلارنى ئاتوم نومۇرى بويىچە تەرتىپلىگەن جەدۋەل' },
          { term: 'ئاتوم نومۇرى', definition: 'نۇۋەدېكى پروتون سانى' },
          { term: 'دۆۋىر', definition: 'ياتاي قۇر، ئاتوم قاتلامى سانى بىلەن ماس' },
          { term: 'گۇرۇپپا', definition: 'بويى قەدەم، ئوخشاش خۇسۇسىيەتلىك ئېلېمېنتلار' },
          { term: 'مېتال', definition: 'ئېلېكترون بېرىشچان، يالقۇن قىلغۇچ، يۇمشاق' }
        ],
        applications: `
          قوللىنىش:
          
          📊 يېڭى ئېلېمېنتلارنى بايقالەش
          📊 دورىلاردا مېتال ئىشلىتىش
          📊 تەلىم-تەربىيەدە تەلىپىلەرگە ئۆگىتىش
          📊 كۆمۈر، نەفىت تەھلىلى
        `
      }
    },
    {
      id: 'states-of-matter',
      title: 'ماددا ھالىتى',
      description: 'ماددىنىڭ قاتتىق، سۇيۇق، گاز ۋە پلازما ھالىتى',
      icon: '💧',
      fullContent: {
        introduction: `ماددا تۆت ھالەتتە بولالايدۇ: قاتتىق، سۇيۇق، گاز ۋە پلازما. ھالەت ئىسسىقلىق ۋە بېسىم بىلەن ئۆزگىرىدۇ.`,
        mainContent: [
          {
            title: 'ئاساسىي ھالەتلەر',
            content: `
              **قاتتىق**: شەكلى ۋە ھەجىمى بار  
              **سۇيۇق**: ھەجىمى بار، شەكلى يوق  
              **گاز**: شەكلىمۇ، ھەجىمىمۇ يوق  
              **پلازما**: گازنى قىزدۇرغاندا ھاسىل بولىدىغان ئىونلاشقان ھالەت
              
              [ماددا ھالىتى ئۆزگىرىشى]
              قاتتىق → سۇيۇق → گاز → پلازما
                ↑ melt    ↑ boil    ↑ ionize
                ↓ freeze  ↓ condense ↓ recombine
            `,
            diagram: `
              ئىسسىقلىق ئاشقان ھالدا:
              قاتتىق → سۇيۇق → گاز → پلازما
            `
          },
          {
            title: 'ھالەت ئۆزگىرىشى',
            content: `
              • **ئەرىش**: قاتتىق → سۇيۇق  
              • **قىتىش**: سۇيۇق → قاتتىق  
              • **بۇغلىنىش**: سۇيۇق → گاز  
              • **چۆكۈش**: گاز → سۇيۇق  
              • **سۇبلىماتسىيە**: قاتتىق → گاز (تۈزۈك)
              
              [مىسال]
              مۇز → سۇ → بۇغ → پلازما
            `,
            formula: 'Q = m·L (L = ئۆزگىرىش ئەنرگىيە سىيىرىش)'
          }
        ],
        keyConcepts: [
          { term: 'قاتتىق', definition: 'ماددىنىڭ شەكلى ۋە ھەجىمى بار بولغان ھالىتى' },
          { term: 'سۇيۇق', definition: 'شەكلى يوق، ھەجىمى بار بولغان ھالەت' },
          { term: 'گاز', definition: 'شەكلىمۇ، ھەجىمىمۇ يوق بولغان ھالەت' },
          { term: 'پلازما', definition: 'ئىونلىرى بار بولغان ئىسسىق گاز' },
          { term: 'بۇغلىنىش', definition: 'سۇيۇقنىڭ ئىسسىقلىق تەسىرىدە گازغا ئايلانىشى' }
        ],
        applications: `
          قوللىنىش:
          
          💧 سۇ تازىلاش
          💧 سوۋۇتۇش سىستېمىلىرى
          💧 يانار ماتېرىياللار
          💧 قۇياش نۇرىدىكى پلازما تەھلىلى
        `
      }
    }
  ];

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    if (topicId === 'periodic-table') {
      setSelectedElement(null); // يېڭىدا
    }
  };

  const handleTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
    setSelectedTopic(null);
    setSelectedElement(null);
  };

  const getCompletionPercentage = () => {
    return Math.round((completedTopics.length / topics.length) * 100);
  };

  const renderContentWithDiagrams = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.includes('[') && line.includes(']')) {
        const diagramContent = line.match(/\[(.*?)\]/)?.[1] || '';
        return (
          <div key={index} className="bg-yellow-50 border border-yellow-200 p-3 rounded my-2 font-mono text-sm">
            {diagramContent}
          </div>
        );
      }
      return <div key={index} className="leading-relaxed">{line}</div>;
    });
  };

  // ⭐ دەۋرىي جەدۋەلنى كۆرسىتىش ئۇسۇلى
  const renderPeriodicTable = () => {
    const table = buildPeriodicTable();
    return (
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
        <div className="grid grid-cols-18 gap-1">
          {table.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((element, colIndex) => (
                element ? (
                  <div
                    key={element.number}
                    className={`w-12 h-12 flex flex-col items-center justify-center text-xs font-bold rounded-md cursor-pointer transition-all hover:scale-105 ${
                      selectedElement?.number === element.number
                        ? 'ring-2 ring-blue-500 bg-blue-100'
                        : ''
                    }`}
                    style={{ backgroundColor: element.color }}
                    onClick={() => setSelectedElement(element)}
                  >
                    <div>{element.number}</div>
                    <div className="text-base">{element.symbol}</div>
                  </div>
                ) : (
                  <div key={`${rowIndex}-${colIndex}`} className="w-12 h-12"></div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* ئىلگىرىلەش يەكۈنلەش */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">ئىلگىرىلەش ھالىتى</h3>
          <span className="text-indigo-600 font-bold">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-indigo-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* باش تونۇشتۇرۇش */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-200">
        <h3 className="text-2xl font-bold text-purple-800">خىمىيە — ماددىلارنىڭ سىررى</h3>
        <p className="text-gray-700 mt-2">
          خىمىيە — ماددىلارنىڭ قۇرۇلۇشى، خۇسۇسىيىتى ۋە ئۆزگىرىشى ھەققىدە ئىلىم.
        </p>
      </div>

      {/* تەپ تىزىملىكى */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <div 
            key={topic.id}
            className={`bg-white p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              selectedTopic === topic.id 
                ? 'border-purple-500 ring-2 ring-purple-200' 
                : completedTopics.includes(topic.id) 
                  ? 'border-green-500' 
                  : 'border-gray-200'
            }`}
            onClick={() => handleTopicSelect(topic.id)}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{topic.icon}</span>
              <div>
                <h4 className="font-bold text-gray-800">{topic.title}</h4>
                {completedTopics.includes(topic.id) && (
                  <span className="text-green-500 text-xs">✓ تاماملاندى</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
          </div>
        ))}
      </div>

      {/* تاللانغان تەپ مەزمۇنى */}
      {selectedTopic && selectedTopic !== 'periodic-table' && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {topics.filter(t => t.id === selectedTopic).map(topic => (
            <div key={topic.id}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{topic.icon}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{topic.title}</h4>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedTopic(null)} className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-200">
                <h5 className="font-bold text-purple-800 mb-2">كىرىش سۆز</h5>
                <p className="text-purple-700 whitespace-pre-line">{topic.fullContent.introduction}</p>
              </div>

              <div className="space-y-8">
                {topic.fullContent.mainContent.map((section, i) => (
                  <div key={i} className="border-b border-gray-200 pb-6">
                    <h5 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="text-gray-700">
                          {renderContentWithDiagrams(section.content)}
                        </div>
                        {section.formula && (
                          <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-center">
                            {section.formula}
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        {section.diagram && (
                          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded font-mono text-sm">
                            {section.diagram}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <h5 className="font-bold text-purple-800 mb-4">ئاساسىي تۈشۈنچىلەر</h5>
                  <div className="space-y-3">
                    {topic.fullContent.keyConcepts.map((c, i) => (
                      <div key={i} className="bg-white p-3 rounded border border-purple-200">
                        <div className="font-bold text-purple-700 text-sm">{c.term}</div>
                        <div className="text-gray-600 text-xs mt-1">{c.definition}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                  <h5 className="font-bold text-indigo-800 mb-4">ئىشلىتىش ساھەلىرى</h5>
                  <div className="text-indigo-700 whitespace-pre-line leading-relaxed">
                    {topic.fullContent.applications}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button onClick={() => setSelectedTopic(null)} className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                  ئارقا
                </button>
                <button onClick={() => handleTopicComplete(topic.id)} className="px-8 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg hover:from-purple-700 hover:to-indigo-600 shadow-md transition-all">
                  تاماملاش
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ⭐ دەۋرىي جەدۋەل ئىنتېراكتىپ كۆرۈنۈشى */}
      {selectedTopic === 'periodic-table' && (
        <div className="space-y-6">
          {/* باش كىرىش */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h5 className="font-bold text-purple-800 mb-2">دەۋرىي جەدۋەل</h5>
            <p className="text-purple-700">{topics.find(t => t.id === 'periodic-table').fullContent.introduction}</p>
          </div>

          {/* جەدۋەل */}
          {renderPeriodicTable()}

          {/* ئېلېمېنت مەلۇماتى */}
          {selectedElement && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div 
                    className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-md"
                    style={{ backgroundColor: selectedElement.color }}
                  >
                    {selectedElement.symbol}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-2xl font-bold text-gray-800">{selectedElement.name}</h4>
                    <p className="text-gray-600">ئاتوم نومۇرى: {selectedElement.number} | ئاتوم مەسىلىسى: {selectedElement.weight.toFixed(2)}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      selectedElement.state === 'solid' ? 'bg-gray-200' :
                      selectedElement.state === 'liquid' ? 'bg-blue-200' :
                      'bg-green-200'
                    }`}>
                      {selectedElement.state === 'solid' ? 'قاتتىق' :
                       selectedElement.state === 'liquid' ? 'سۇيۇق' : 'گاز'}
                    </span>
                  </div>
                </div>
                <button onClick={() => setSelectedElement(null)} className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">ئاساسىي مەلۇمات</h5>
                  <div className="space-y-2 text-gray-700">
                    <div><strong>ئاتوم نومۇرى:</strong> {selectedElement.number}</div>
                    <div><strong>ئىسمى:</strong> {selectedElement.name}</div>
                    <div><strong>ئاتوم مەسىلىسى:</strong> {selectedElement.weight.toFixed(2)}</div>
                    <div><strong>ھالىتى:</strong> {selectedElement.state === 'solid' ? 'قاتتىق' : selectedElement.state === 'liquid' ? 'سۇيۇق' : 'گاز'}</div>
                    <div><strong>تۈرى:</strong> {selectedElement.category}</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-gray-800 mb-2">ئىشلىتىش ساھەلىرى</h5>
                  <div className="text-gray-700 leading-relaxed">
                    {(() => {
                      switch(selectedElement.symbol) {
                        case 'H': return "سۇنىڭ قۇرۇلۇشىدا، ئوكسىگېن بىلەن بىرلىكتە. يېڭى ئېنېرگىيە مەنبەسى.";
                        case 'He': return "بالونلاردا، سوۋۇتۇش سىستېمىلىرىدا، مەدەنىيەتتە.";
                        case 'Li': return "لېتىيۇم باتارېيىلار، ئەمەلدارلىق دەرمانلار.";
                        case 'Be': return "ئېلېكترونلۇق ئۈسكۈنىلەر، كۆرۈنۈش ئۈچۈن يەڭىل مېتال.";
                        case 'B': return "تېرموستاتلار، شىشىلار، ئوت چىقىرىش ئۈچۈن.";
                        case 'C': return "تىرىكلىقنىڭ ئاساسى، كۆمۈر، نەفىت، دورىلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'N': return "ئۆسۈملۈكلەرنىڭ ئۆسۈشى ئۈچۈن زۆرۈر، سۇيۇق ئازوت سوۋۇتۇش.";
                        case 'O': return "نەپەس ئېلىش ئۈچۈن زۆرۈر، يانغىن سۆندۈرۈش، تىببىي ئىشلىتىش.";
                        case 'F': return "تىش سۇسلىتىش سۇسى، تەبىئىي گاز، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ne': return "نۇرلىق چىراغلار، نېون چىراغلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Na': return "تۇزنىڭ بىر قۇرۇلۇشچانى، تۇرمۇش سۇسى، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Mg': return "ئەسلىي مېتال، ماشىنا قىسمىلىرى، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Al': return "ئەسلىي مېتال، ئەسلىي قۇرۇلۇش، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Si': return "ئېلېكترونلۇق ئۈسكۈنىلەر، سېمىكوندۇكتورلار، سېلىكون.";
                        case 'P': return "ئۆسۈملۈكلەرنىڭ ئۆسۈشى ئۈچۈن زۆرۈر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'S': return "تىببىي دەرمانلار، كۈكۈرلۈك ئىشلىتىش.";
                        case 'Cl': return "سۇنى تازىلاش، تىببىي دەرمانلار.";
                        case 'Ar': return "نۇرلىق چىراغلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'K': return "ئۆسۈملۈكلەرنىڭ ئۆسۈشى ئۈچۈن زۆرۈر، تىببىي دەرمانلار.";
                        case 'Ca': return "ئەسلىي مېتال، سۈت، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Sc': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ti': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'V': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cr': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Mn': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Fe': return "تېما، ماشىنا، قۇرۇلۇش ئىشلىرى.";
                        case 'Co': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ni': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cu': return "ئېلېكتىر سىملىرى، ئىشلەپچىقىرىش.";
                        case 'Zn': return "ئەسلىي مېتال، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ga': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ge': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'As': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Se': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Br': return "تىببىي دەرمانلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Kr': return "نۇرلىق چىراغلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Rb': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Sr': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Y': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Zr': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Nb': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Mo': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Tc': return "تىببىي دەرمانلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ru': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Rh': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pd': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ag': return "زىننەت، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cd': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'In': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Sn': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Sb': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Te': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'I': return "تىببىي دەرمانلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Xe': return "نۇرلىق چىراغلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cs': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ba': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'La': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ce': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pr': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Nd': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pm': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Sm': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Eu': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Gd': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Tb': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Dy': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ho': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Er': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Tm': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Yb': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Lu': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Hf': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ta': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'W': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Re': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Os': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ir': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pt': return "زىننەت، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Au': return "زىننەت، پۇل سىستېمىسى، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Hg': return "تىببىي دەرمانلار، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Tl': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pb': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Bi': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Po': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'At': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Rn': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Fr': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ra': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ac': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Th': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pa': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'U': return "ئاتوم ئېنېرگىيەسى، ئۇرۇش ئۈسكۈنىلىرى.";
                        case 'Np': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Pu': return "ئاتوم ئېنېرگىيەسى، ئۇرۇش ئۈسكۈنىلىرى.";
                        case 'Am': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cm': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Bk': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cf': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Es': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Fm': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Md': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'No': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Lr': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Rf': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Db': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Sg': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Bh': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Hs': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Mt': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ds': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Rg': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Cn': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Nh': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Fl': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Mc': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Lv': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Ts': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        case 'Og': return "ئېلېكترونلۇق ئۈسكۈنىلەر، ئېلېكترونلۇق ئۈسكۈنىلەر.";
                        default: return "ئەرزىملىك ئىشلىتىش ساھەلىرى بار.";
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* تاماملاش بوتانى */}
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button 
              onClick={() => handleTopicComplete('periodic-table')}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg hover:from-purple-700 hover:to-indigo-600 shadow-md transition-all"
            >
              دەۋرىي جەدۋەل تېمىسىنى تاماملاش
            </button>
          </div>
        </div>
      )}

      {/* تېست ۋە قوشۇش */}
      <div className="text-center">
        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg hover:from-purple-700 hover:to-indigo-600 shadow-md transition-all">
          خىمىيە تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">10 سۇئال • 12 دەقىقە</p>
      </div>
    </div>
  );
};

export default ChemistryModule;