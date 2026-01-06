// src/components/RecentPosts.jsx
export default function RecentPosts() {
  return (
    <section className="bg-light-bg py-8 px-6 md:px-14 mt-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl text-dark">Recent posts</h3>
          <a href="#" className="text-secondary text-sm">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Post */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-2xl font-bold text-dark mb-4">Making a design system from scratch</h4>
            <div className="flex gap-4 text-dark/80 mb-4">
              <span>12 Feb 2020</span>
              <span>|</span>
              <span>Design, Pattern</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
          </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-2xl font-bold text-dark mb-4">How to not Crashout After 12 Hours Programming</h4>
            <div className="flex gap-4 text-dark/80 mb-4">
              <span>12 Feb 2020</span>
              <span>|</span>
              <span>Chill</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
          </div>
        </div>
      </div>
    </section>
  );
}