import React from 'react';

const Blog70 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">دروندىن خەرىتە ئىشلەش (Drone Mapping) نى باشتىن-ئاخىر ئۈگىنىڭ: تولۇق دەرسلىك (باشلانغۇچلار ئۈچۈن)</h1>
      
      <p className="text-lg mb-6">سالام! بۇ دەرسلىك دروندىن (UAV) پايدىلىنىپ، يەر يۈزىنىڭ دەل-دۇرۇس خەرىتىسى، 3D مودېلى ۋە يۈسۈملۈك خەرىتىسى ياساشنى باشتىن-ئاخىر چۈشەندۈرىدۇ. بۇ جەريان <strong>فوتوگراممېترىيە (Photogrammetry)</strong> دەپ ئاتىلىدۇ. باشلانغۇچلار ئۈچۈن ئاددىي، قەدەممۇ-قەدەم تەييارلانغان بولۇپ، ھەقسىز ئەسلىھەلەرگە ئەھمىيەت بېرىلگەن. بۇ دەرسلىكتە تولۇق دىمو كودى، مەشىق قىلىش ئۇسۇللىرى، سانلىق مەلۇمات ئەكىرىش ۋە ئەملى مىساللار قوشۇلدى.</p>

      <h2 className="text-3xl font-semibold mt-12 mb-6">1. دروندىن خەرىتە ئىشلەش دېگەن نېمە؟</h2>
      <p className="mb-6">دروندىن يۈكسەكتىن نۇرغۇن سۈرەت تارتىپ، كومپيۇتېر پروگراممىسى ئارقىلىق بۇ سۈرەتلەرنى بىرلەشتۈرۈپ، تۈز خەرىتە (Orthomosaic)، 3D مودېل، نۇقتا بۇلۇتى (Point Cloud) ۋە يۈسۈملۈك خەرىتىسى (DEM/DSM) ياساش. تەتبیقى: قۇرۇلۇش، كەند تەسەررۇپى، ئارخېئولوگىيە، مۇھىت كۆزىتىش قاتارلىقلار.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://images.squarespace-cdn.com/content/v1/6141a9bd81d4225239c39cf3/1674788848864-55QC1VSQPTRYPNWTY5GX/DJI-Mavic-3-Enterprise-vs-Phantom-4-RTK.jpg" alt="DJI Mavic 3 Enterprise ۋە Phantom 4 RTK درونلىرى" className="rounded-lg shadow-lg" />
        <img src="https://media.licdn.com/dms/image/v2/D4E12AQECs6_2P5zZxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1666600943816?e=2147483647&v=beta&t=X9qg_sc9B17xcywtmCjVbPC3XwpVpZVecFQlCdHNbGw" alt="خەرىتە ئىشلەشكە ماس كېلىدىغان درونلار" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">2. ئاساسىي ئۇقۇملار</h2>
      <ul className="list-disc pl-8 mb-6 space-y-4">
        <li><strong>Overlap (قايتىلىنىش):</strong> سۈرەتلەر بىر-بىرىگە قايتىلىنىشى كېرەك، بولمىسا پروگرامما ئورتاق نۇقتىلارنى تېپىپ بىرلەشتۈرەلمەيدۇ.</li>
        <li>Forward overlap: 70-80%</li>
        <li>Side overlap: 60-70%</li>
        <li><strong>GSD (Ground Sample Distance):</strong> بىر پىكسېلنىڭ يەردىكى چوڭلۇقى (مەسىلەن، 3 سم/پىكسېل). ئۇچۇش ئېگىزلىكى تۆۋەن بولسا، دەللىك يۇقىرى بولىدۇ.</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://images.squarespace-cdn.com/content/v1/54579091e4b05fc750f0d8ea/1562635275739-09JCXMZD7TYI5QZ8P0D8/Overlap" alt="Overlap دىئاگراممىسى" className="rounded-lg shadow-lg" />
        <img src="https://www.researchgate.net/publication/332945478/figure/fig1/AS:756292679368704@1557325634248/Diagram-of-forward-overlap-and-side-overlap.jpg" alt="ئالدى-كەينى ۋە يان قايتىلىنىش" className="rounded-lg shadow-lg" />
        <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=916940213773425" alt="Overlap مۇھىمىيىتى" className="rounded-lg shadow-lg" />
        <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=916940210440092" alt="يان ۋە ئالدى overlap" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">3. ئۇچۇش پىلانلىشى ۋە سانلىق مەلۇمات توپلاش</h2>
      <p className="mb-6">ئەڭ مۇھىم باسقۇچ! ياخشى سانلىق مەلۇمات بولمىسا، نەتىجە ناچار چىقىدۇ.</p>
      <ol className="list-decimal pl-8 mb-6 space-y-4">
        <li>رايوننى بەلگىلەڭ (Google Earth ياكى پروگرامما ئىچىدە).</li>
        <li>ئۇچۇش پروگراممىسى ئىشلىتىڭ: DJI GS Pro, Pix4Dcapture, Litchi (ھەقسىز نەشرى بار).</li>
        <li>Grid pattern (تور شەكلىدىكى ئۇچۇش يولى) پىلانلاڭ.</li>
        <li>GCP قويۇڭ (دەللىكنى 2-5 سم غىچە يەتكۈزىدۇ).</li>
        <li>ياخشى ھاۋادا ئۇچۇڭ، 300-1000 سۈرەت تارتىڭ.</li>
      </ol>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://uavrt.nau.edu/wp-content/uploads/2018/10/lawnmower.jpg" alt="Grid pattern ئۇچۇش پىلانى" className="rounded-lg shadow-lg" />
        <img src="https://uavrt.nau.edu/wp-content/uploads/2018/10/mp_hud_full-min.jpg" alt="Mission Planner ئارايۈزى" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">4. GCP (يەر كونترول نۇقتىلىرى) نى قانداق قويىمىز؟</h2>
      <p className="mb-6">يەردە كۆرۈنەرلىك بەلگە قويۇپ، RTK GPS بىلەن ئورنىنى دەل ئۆلچەڭ.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://www.jouav.com/wp-content/uploads/2023/10/ground-control-points-gcps-3-1024x658.jpg" alt="GCP مىسالى" className="rounded-lg shadow-lg" />
        <img src="https://civiltracker.xyz/wp-content/uploads/sites/92/2023/05/gcp.jpg" alt="GCP قويۇش" className="rounded-lg shadow-lg" />
        <img src="https://aeroviews.co/wp-content/uploads/2025/06/d3f9b5ea-52eb-4330-9768-75e2fac2a908.png" alt="دروندا كۆرۈنگەن GCP" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">5. سانلىق مەلۇمات بىر تەرەپ قىلىش (Processing)</h2>
      <p className="mb-6">سۈرەتلەرنى پروگراممىغا يۈكلەپ، ئاپتوماتىك بىرلەشتۈرۈڭ.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://www.researchgate.net/publication/332419847/figure/fig10/AS:779420604309519@1562839761571/Flowchart-of-the-3D-modeling-and-analysis-procedure-using-UAV-photogrammetry.png" alt="بىر تەرەپ قىلىش جەريان دىئاگراممىسى" className="rounded-lg shadow-lg" />
        <img src="https://www.researchgate.net/publication/319537667/figure/fig1/AS:536243845173249@1504861903818/Flowchart-adopted-for-3D-mapping-using-Drone-Technology.png" alt="3D خەرىتە ياساش جەريانى" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">6. ھەقسىز پروگرامما: OpenDroneMap (WebODM)</h2>
      <p className="mb-6">ئەڭ ياخشى باشلانغۇچ تاللاش! Docker ئارقىلىق قاچىلاڭ.</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
        <code>
git clone https://github.com/OpenDroneMap/WebODM --depth 1{'\n'}
cd WebODM{'\n'}
./webodm.sh start{'\n'}
        </code>
      </pre>
      <p>براۋزېردا http://localhost:8000 نى ئېچىڭ، سۈرەتلەرنى يۈكلەڭ ۋە Process بېسىڭ.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://community.opendronemap.org/uploads/default/original/2X/c/c4ee38460c1b0e79cdb63f5fd4d372200b25726c.png" alt="WebODM ئارايۈزى" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">7. تولۇق دىمو كودى</h2>
      <p className="mb-6">تۆۋەندە WebODM نىڭ تولۇق دىمو كودى بېرىلدى. بۇ كود Docker ئارقىلىق ODM نى ئىجرا قىلىپ، سانلىق مەلۇماتنى بىر تەرەپ قىلىدۇ. ئۇنىڭدىن كېيىن Python بىلەن pyODM ئىشلىتىپ ئاپتوماتىكلاشتۇرۇش مىسالى.</p>

      <h3 className="text-2xl font-semibold mb-4">Bash بىلەن تولۇق ئىجرا كودى (Docker):</h3>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
        <code>
# Docker نى قاچىلاڭ (ئەگەر قاچىلانمىغان بولسا){'\n'}
sudo apt install docker.io{'\n\n'}

# ODM ئوبيېكتىنى يۈكلەڭ{'\n'}
docker pull opendronemap/odm{'\n\n'}

# سانلىق مەلۇمات قىسقۇچىنى تەييارلاڭ (مەسىلەن /my_project/images دىكى سۈرەتلەر){'\n'}
mkdir -p /my_project/images{'\n\n'}

# تولۇق ئىجرا: يۇقىرى سۈپەتلىك orthophoto, 3D مودېل, DEM ياساش{'\n'}
docker run --rm -v "/my_project:/datasets/code" opendronemap/odm \{'n'}
  --project-path /datasets code \{'n'}
  --feature-quality high \{'n'}
  --pc-quality high \{'n'}
  --orthophoto-resolution 1 \{'n'}
  --dsm --dtm \{'n'}
  --mesh-size 300000 \{'n'}
  --mesh-octree-depth 10 \{'n'}
  --smrf-threshold 0.4 \{'n'}
  --smrf-window 24 \{'n'}
  --dem-resolution 2{'\n\n'}

# نەتىجىلەرنى كۆرۈڭ: /my_project/odm_orthophoto/odm_orthophoto.tif قاتارلىقلار
        </code>
      </pre>

      <h3 className="text-2xl font-semibold mb-4">Python بىلەن ئاپتوماتىكلاشتۇرۇش (pyODM):</h3>
      <p className="mb-4">ئاۋۋال pip install pyodm قىلىڭ. NodeODM سېرۋېرى (WebODM) ئىشلەۋاتقان بولۇڭ.</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
        <code>
from pyodm import Node{'\n\n'}

# NodeODM غا ئۇلىنىڭ{'\n'}
node = Node("localhost", 3000){'\n\n'}

# سانلىق مەلۇماتنى ئەكىرىڭ ۋە بىر تەرەپ قىلىڭ{'\n'}
task = node.create_task(["/my_project/images/*.jpg"], \{'n'}
  "dsm": True,{'\n'}
  "dtm": True,{'\n'}
  "orthophoto-resolution": 1,{'\n'}
  "pc-quality": "high",{'\n'}
  "feature-quality": "high"{'\n'}
){'\n\n'}

# ئىجرا ھالىتىنى كۆرۈڭ{'\n'}
print(task.info()){'\n\n'}

# نەتىجىلەرنى يۈكلەڭ{'\n'}
task.download_assets("/my_project/results")
        </code>
      </pre>

      <h2 className="text-3xl font-semibold mt-12 mb-6">8. قانداق مەشىق قىلىمىز؟ (تەپسىلىي چۈشەندۈرۈش)</h2>
      <p className="mb-6">مەشىق قىلىش ئۈچۈن ئاۋۋال كومپيۇتېرىڭىزغا Docker قاچىلاڭ (docker.com دىن). ئاندىن WebODM نى قاچىلاڭ ۋە ئىجرا قىلىڭ. ئۇنىڭدىن كېيىن ھەقسىز سانلىق مەلۇمات توپلىمىنى يۈكلەڭ، WebODM غا ئەكىرىڭ ۋە بىر تەرەپ قىلىڭ. بۇ جەرياننى بىر نەچچە قېتىم تەكرارلاڭ، پارامېتىرلارنى ئۆزگەرتىڭ (مەسىلەن، resolution نى تەڭشەڭ). خاتالىق چىقسا، overlap نى تەكشۈرۈڭ ياكى سۈرەت سانىنى ئازايتىڭ. مەشىق قىلىش ئۈچۈن كىچىك توپلاملارنى ئىشلىتىڭ (50-200 سۈرەت)، كومپيۇتېر كۈچىگە قاراپ 30 مىنۇتتىن 2 سائەتكىچە كېتىدۇ.</p>

      <h2 className="text-3xl font-semibold mt-12 mb-6">9. سانلىق مەلۇماتنى قانداق ئەكىرىپ مەشىق قىلىمىز؟</h2>
      <p className="mb-6">سانلىق مەلۇمات (دروندىن تارتىلغان سۈرەتلەر) نى ئەكىرىش ئاسان: WebODM ئارايۈزىدا يېڭى تۈر قۇرۇڭ، سۈرەتلەرنىڭ قىسقۇچىنى تاللاڭ ياكى drag & drop قىلىڭ. GCP بولسا، gcp_list.txt فايلىنى قوشۇڭ (فورماتى: X Y Z image1.jpg image2.jpg...). ئەكىرگەندىن كېيىن پارامېتىرلارنى تەڭشەڭ (مەسىلەن، high quality) ۋە Process بېسىڭ. نەتىجىلەرنى كۆرۈڭ ۋە يۈكلەڭ. مەشىق ئۈچۈن ھەقسىز توپلاملارنى ئىشلىتىڭ، ئۇلارنىڭ ئىچىدە تەييار سۈرەتلەر بار.</p>

      <h2 className="text-3xl font-semibold mt-12 mb-6">10. ئەملى مىسال بىلەن چۈشەندۈرۈش</h2>
      <p className="mb-6">ئەملى مىسال: Pix4D نىڭ "Building" توپلىمىنى ئىشلىتىڭ (36 سۈرەت، بىنا 3D مودېلى ئۈچۈن). Download: https://data.pix4d.com/misc/example_datasets/example_building.zip. ئۇنى unzip قىلىڭ، WebODM غا ئەكىرىڭ (images قىسقۇچىنى تاللاڭ). پارامېتىرلار: --pc-quality high, --orthophoto-resolution 2. Process بېسىڭ. نەتىجىدە orthomosaic.tif ۋە textured_model.obj چىقىدۇ. بۇنى QGIS دە ئېچىڭ ياكى MeshLab دە 3D نى كۆرۈڭ. مىسال رەسىملەر:</p>

<grok-card data-id="804eb6" data-type="image_card"  data-arg-size="LARGE" ></grok-card>



<grok-card data-id="1aba9d" data-type="image_card"  data-arg-size="LARGE" ></grok-card>



<grok-card data-id="77d726" data-type="image_card"  data-arg-size="LARGE" ></grok-card>



<grok-card data-id="b6d404" data-type="image_card"  data-arg-size="LARGE" ></grok-card>


      <p className="mb-6">يەنە بىر مىسال: OpenDroneMap نىڭ datasets دىن "Good starter dataset" نى يۈكلەڭ (GitHub دىن). ئۇنىڭ بىلەن مەشىق قىلىڭ، DEM ياساپ كۆرۈڭ (--dsm true بىلەن).</p>

      <h2 className="text-3xl font-semibold mt-12 mb-6">11. نەتىجىلەر مىسالى</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <img src="https://support.pix4d.com/hubfs/Knowledge%20Base%20Import/360000491483.png" alt="Orthomosaic خەرىتە" className="rounded-lg shadow-lg" />
        <img src="https://images.ctfassets.net/go54bjdzbrgi/fNuDew3tIWg2OOywYOIKM/ebef71a9e739dd33efc5297dce42034c/Pix4D_construction_surveys_BIM000b.jpg" alt="نۇقتا بۇلۇتى" className="rounded-lg shadow-lg" />
        <img src="https://enterprise-insights.dji.com/hs-fs/hubfs/Blog%20Images/DJI%20Terra%20Top%20Features%20Updated%20Article/84383057-d4b9-4db5-96cc-3f8da5fb3605.jpeg?width=3824&height=2088&name=84383057-d4b9-4db5-96cc-3f8da5fb3605.jpeg" alt="3D مودېل" className="rounded-lg shadow-lg" />
        <img src="https://support.pix4d.com/hs-fs/hubfs/Knowledge%20Base%20Import/360000495526.png?width=688&height=515&name=360000495526.png" alt="يۈسۈملۈك خەرىتە" className="rounded-lg shadow-lg" />
      </div>

      <h2 className="text-3xl font-semibold mt-12 mb-6">خۇلاسە ۋە مەسلىھەت</h2>
      <p className="mb-6">تۇنجى قېتىم كىچىك رايون (1-5 گېكتار) دا سىناڭ. خاتالىق چىقسا، overlap ۋە سۈرەت سۈپىتىنى تەكشۈرۈڭ. داۋاملىق مەشىق قىلسىڭىز، 3-6 ئايدا مۇستەقىل خەرىتە ياسىيالايسىز.</p>
      <p className="text-xl font-bold">ئۇچۇشىڭىز مۇۋەپپەقىيەتلىك بولسۇن! 🚁🗺️</p>
    </div>
  );
};

export default Blog70;