export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{course.title}</h3>
      <p className="text-sm text-gray-600">ئوقۇتقۇچى: {course.teacher}</p>
      <p className="text-sm">مەزگىلى: {course.duration}</p>

      {course.video && (
        <video controls className="w-full mt-2 rounded">
          <source src={course.video} type="video/mp4" />
        </video>
      )}

      <div className="mt-3">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{course.progress}% تاماملاندى</p>
      </div>
    </div>
  );
}
