// src/components/Ballada.jsx
import React, { Suspense } from 'react';
import { Tab } from '@headlessui/react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

// Lazy-loaded subject components
const MathComponent = React.lazy(() => import('./learn-modules/ballada/math.jsx'));
const PhysicComponent = React.lazy(() => import('./learn-modules/ballada/physic.jsx'));
const ChemistryComponent = React.lazy(() => import('./learn-modules/ballada/chemistry.jsx'));
const GeographyComponent = React.lazy(() => import('./learn-modules/ballada/geography.jsx'));
const NatureComponent = React.lazy(() => import('./learn-modules/ballada/nature.jsx'));
const LiteratureComponent = React.lazy(() => import('./learn-modules/ballada/literature.jsx'));
const SocietyComponent = React.lazy(() => import('./learn-modules/ballada/society.jsx'));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center h-64">
    <BookOpenIcon className="h-12 w-12 text-green-500 animate-pulse" />
    <span className="mt-3 text-gray-600 font-[UKIJ Nasq]">يۈكلەۋاتىدۇ...</span>
  </div>
);

const Ballada = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 md:p-8" dir="rtl">
      {/* سىلوگان / باشلىق */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 font-[UKIJ Tuz]">
          باللار ئۈگنىش باغچىسىغا خۇش كەلدىڭىز!
        </h1>
        <p className="text-gray-600 mt-2 font-[UKIJ Nasq]">
          ئىلم-پەن باغچىسىدە كەڭ دۇنيا ساياھەت قىلىش ئۈچۈن تىكلەش بۇلۇتىنى تاللاڭ
        </p>
      </div>

      {/* تەبلەر ۋە مەزمۇن */}
      <div className="max-w-6xl mx-auto">
        <Tab.Group>
          <Tab.List className="flex flex-wrap justify-center gap-2 mb-6 border-b-2 border-gray-200 pb-2">
            {[
              'ماتىماتىكا',
              'فىزىكا',
              'خمىيە',
              'جۇغرافىيە',
              'تەبئەت',
              'ئەدەبىيات',
              'جەمىيەت',
            ].map((name, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  `px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all
                  ${selected
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-green-100 border border-green-300'
                    }`
                }
              >
                {name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6 bg-white rounded-xl shadow-lg p-4 md:p-6 min-h-[400px]">
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <MathComponent />
              </Suspense>
            </Tab.Panel>
            
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <PhysicComponent />
              </Suspense>
            </Tab.Panel>
            
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <ChemistryComponent />
              </Suspense>
            </Tab.Panel>
            
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <GeographyComponent />
              </Suspense>
            </Tab.Panel>
            
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <NatureComponent />
              </Suspense>
            </Tab.Panel>
            
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <LiteratureComponent />
              </Suspense>
            </Tab.Panel>
            
            <Tab.Panel className="focus:outline-none">
              <Suspense fallback={<LoadingFallback />}>
                <SocietyComponent />
              </Suspense>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Ballada;