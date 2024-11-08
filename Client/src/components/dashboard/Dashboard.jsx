import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Progress from './Progress';
import AchievementCard from './AchievementCard';
import QuickAccess from './QuickAccess';



const data = [
  { month: 'Jan', Attendance: 80, Assignments: 10, Events: 20 },
  { month: 'Feb', Attendance: 90, Assignments: 35, Events: 20 },
  { month: 'Mar', Attendance: 88, Assignments: 20, Events: 30 },
  { month: 'Apr', Attendance: 92, Assignments: 25, Events: 65 },
  { month: 'May', Attendance: 94, Assignments: 20, Events: 55 },
  { month: 'Jun', Attendance: 89, Assignments: 10, Events: 40 },
];

const courses = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Aditi Sharma',
    duration: '30 hours',
    level: 'Beginner',
    progress: 70,
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=course1',
  },
  {
    id: 2,
    title: 'Advanced Web Development',
    instructor: 'Prof. Rajesh Gupta',
    duration: '40 hours',
    level: 'Intermediate',
    progress: 50,
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=course2',
  },
  {
    id: 3,
    title: 'Data Structures and Algorithms',
    instructor: 'Dr. Priya Nair',
    duration: '35 hours',
    level: 'Advanced',
    progress: 60,
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=course3',
  }
];
function Dashboard({onTodoListClick}) {
  return (
    <div className="space-y-6">
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Progress />
            <QuickAccess onTodoListClick={onTodoListClick} />
            <AchievementCard />
        </div>
      </section>

      {/* Upcoming Classes section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(course => (
            <div key={course.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{course.instructor}</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Statistics section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Academic Statistics</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Attendance" stroke="#646cff" strokeWidth={2} />
              <Line type="monotone" dataKey="Assignments" stroke="#ff6b6b" strokeWidth={2} />
              <Line type="monotone" dataKey="Events" stroke="#51cf66" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Upcoming Events section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Events</h2>
        <div className="space-y-4">
          {[
            { title: 'College Tech Fest', date: 'November 10, 2024' },
            { title: 'Guest Lecture on AI', date: 'November 15, 2024' },
            { title: 'Annual Sports Day', date: 'December 1, 2024' },
          ].map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <h3 className="font-bold text-gray-900 dark:text-white">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Notifications</h2>
        <div className="space-y-4">
          {[
            { message: 'New assignment uploaded for Math!', date: 'October 30, 2024' },
            { message: 'Reminder: Science Project due in 1 week.', date: 'October 31, 2024' },
            { message: 'Workshop on Web Development scheduled for November 5, 2024.', date: 'November 1, 2024' },
          ].map((notification, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <p className="text-gray-900 dark:text-white">{notification.message}</p>
              <span className="text-sm text-gray-600 dark:text-gray-400">{notification.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Assignments Overview section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Assignments Overview</h2>
        <div className="space-y-4">
          {[
            { title: 'Math Assignment 1', due: '3 days', exercises: 5 },
            { title: 'Science Project', due: '1 week', exercises: 10 },
            { title: 'History Presentation', due: '5 days', exercises: 1 },
          ].map((assignment, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{assignment.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Due in {assignment.due}</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">{assignment.exercises} exercises</span>
                <div className="ml-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
