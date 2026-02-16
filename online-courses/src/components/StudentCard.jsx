export default function StudentCard({ student, onDelete, onViewDetails, showActions, isCurrentUser }) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-200 hover:shadow-lg ${
      isCurrentUser ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
    }`}>
      {/* كارتا باشلىقى */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg truncate">{student.name}</h3>
          {isCurrentUser && (
            <span className="bg-green-500 text-xs px-2 py-1 rounded-full">سىز</span>
          )}
        </div>
        <p className="text-blue-100 text-sm mt-1">{student.department || "بۆلۈم يوق"}</p>
      </div>
      
      {/* كارتا مەزمۇنى */}
      <div className="p-4">
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <span className="mr-2">📧</span>
            <span className="text-sm truncate">{student.email || "ئېلخەت يوق"}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-2">📞</span>
            <span className="text-sm">{student.phone || "تېلېفون يوق"}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-2">📚</span>
            <span className="text-sm">
              {student.courses?.length || 0} دەرس
            </span>
          </div>
          {student.joinDate && (
            <div className="flex items-center text-gray-600">
              <span className="mr-2">📅</span>
              <span className="text-sm">{student.joinDate}</span>
            </div>
          )}
        </div>

        {/* ھەرىكەت بوتۇنلىرى */}
        <div className="flex flex-col gap-2">
          {/* تەپسىلاتىنى كۆرۈش */}
          <button
            onClick={() => onViewDetails(student)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>👁️</span>
            تەپسىلاتىنى كۆرۈش
          </button>
          
          {/* ئادىمىن ھەرىكەتلىرى */}
          {showActions && (
            <div className="flex gap-2">
              <button
                onClick={() => onViewDetails(student)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm transition-colors duration-200"
              >
                تەھرىرلەش
              </button>
              <button
                onClick={() => onDelete(student.id, student.name)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg text-sm transition-colors duration-200"
              >
                ئۆچۈرۈش
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}