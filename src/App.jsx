export default function Portfolio() {

  const skills = [
    "React Native",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Redux Toolkit",
    "Context API",
    "GraphQL",
    "REST APIs",
    "Firebase",
    "AWS",
    "CI/CD",
    "Git",
    "GitHub Actions",
    "Jest",
    "Push Notifications",
    "Deep Linking",
    "Payment Gateway Integration",
    "Stripe",
    "Razorpay",
    "Google Maps",
    "Geolocation",
    "iOS Development",
    "Android Development",
    "Native Modules",
    "Performance Optimization",
    "Mobile App Architecture",
    "MVVM",
    "Clean Architecture",
    "Agile",
    "Scrum",
    "Code Review",
    "Team Leadership"
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 bg-gradient-to-r from-indigo-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Jignasa Kapadiya
            </h1>

            <p className="mt-4 text-2xl text-indigo-400 font-semibold">
              Team Leader • Senior React Native Developer
            </p>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              Accomplished Senior React Native Developer | Mobile Architect | Technical Team Lead with 11+ years of experience in designing, developing, and delivering cross-platform mobile applications using React Native, TypeScript, JavaScript, Redux, Redux Toolkit, GraphQL, Firebase, REST APIs, and CI/CD. Expertise in iOS and Android development, mobile application architecture, performance optimization, push notifications, deep linking, payment gateway integration, Google Maps, Agile/Scrum methodologies, and cloud-based solutions. Proven ability to lead development teams, manage end-to-end project delivery, conduct code reviews, and build scalable enterprise applications for healthcare, logistics, transportation, e-commerce, fintech, and SaaS domains. Strong focus on software quality, user experience, and delivering business-critical mobile solutions.            </p>

            <p className="mt-6 text-gray-400 leading-8 text-lg">
              Proven expertise in leading development teams, architecting scalable mobile solutions, and building production-ready iOS and React Native applications with exceptional user experience. Skilled in React Native, Firebase, Redux, API integration, real-time systems, and mobile performance optimization.
            </p>

            <p className="mt-6 text-gray-400 leading-8 text-lg">
              Successfully delivered multiple live applications on App Store and Google Play while collaborating directly with international clients, managing teams, mentoring developers, and driving projects from concept to deployment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full">
                11+ Years Experience
              </span>

              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full">
                React Native Expert
              </span>

              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full">
                Team Leadership
              </span>

              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full">
                App Store & Play Store Apps
              </span>
            </div>


            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:jignasa1010@gmail.com"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Contact Me
              </a>
              <a
                href="tel:+918160438429"
                className="border border-gray-500 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gray-800 border-4 border-indigo-500 flex items-center justify-center text-center p-6 shadow-2xl">
              <div>
                <h2 className="text-3xl font-bold">11+ Years</h2>
                <p className="text-gray-400 mt-2">Mobile App Development Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20 md:px-20">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="bg-gray-900 rounded-3xl p-8 shadow-lg">
          <p className="text-gray-400 text-lg leading-9 mt-6"> Experienced in leading development teams, handling end-to-end project execution, mentoring developers, and collaborating directly with clients to transform business requirements into successful digital products. Strong expertise in React Native, Firebase, Redux, REST APIs, real-time features, Google Maps integration, push notifications, and mobile app optimization. </p> <p className="text-gray-400 text-lg leading-9 mt-6"> Successfully delivered multiple live applications across healthcare, logistics, transportation, e-commerce, social networking, and on-demand service industries with apps published on both the App Store and Google Play Store. Recognized for strong leadership, problem-solving ability, technical excellence, and commitment to delivering impactful mobile solutions. </p> <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"> <div className="bg-gray-800 rounded-2xl p-4 text-center"> <h3 className="text-2xl font-bold text-indigo-400">11+</h3> <p className="text-gray-400 mt-1">Years Experience</p> </div> <div className="bg-gray-800 rounded-2xl p-4 text-center"> <h3 className="text-2xl font-bold text-indigo-400">30+</h3> <p className="text-gray-400 mt-1">Apps Delivered</p> </div> <div className="bg-gray-800 rounded-2xl p-4 text-center"> <h3 className="text-2xl font-bold text-indigo-400">React Native</h3> <p className="text-gray-400 mt-1">Expert</p> </div> <div className="bg-gray-800 rounded-2xl p-4 text-center"> <h3 className="text-2xl font-bold text-indigo-400">Team</h3> <p className="text-gray-400 mt-1">Leadership</p> </div> </div>
        </div>
      </section> */}

      {/* Skills */}
      <section className="bg-gray-900 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-4 text-center hover:border-indigo-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:px-20">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-8">
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              Team Leader | Senior React Native Developer
            </h3>

            <p className="text-indigo-400 mt-2">
              iQlance Solutions Pvt. Ltd | 2021 - Present
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Leading cross-functional development teams in designing, developing,
              and deploying scalable React Native applications for iOS and Android
              platforms. Responsible for mobile application architecture, code reviews,
              performance optimization, client communication, project planning, and
              Agile delivery. Collaborate directly with international stakeholders to
              deliver enterprise-grade solutions, mentor developers, implement CI/CD
              pipelines, integrate REST APIs and third-party services, and ensure
              high-quality software delivery aligned with business objectives.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              Senior React Native Developer
            </h3>

            <p className="text-indigo-400 mt-2">
              Provitious Technologies Pvt. Ltd | 2018 - 2021
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Designed, developed, and maintained cross-platform mobile applications
              using React Native for healthcare, transportation, logistics, delivery,
              and lifestyle industries. Implemented scalable mobile architectures,
              integrated REST APIs and third-party services, managed state using Redux,
              optimized application performance, and ensured seamless deployment on iOS
              and Android platforms. Collaborated with product managers, designers, and
              backend teams in Agile environments to deliver high-quality, user-centric
              mobile solutions.
            </p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">Sr. iOS Developer</h3>
            <p className="text-indigo-400 mt-2">
              Cisner India Pvt. Ltd & Vertilex Solutions | 2016 - 2018
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              Senior iOS Developer
            </h3>

            <p className="text-indigo-400 mt-2">
              Vertilex Solutions Pvt. Ltd | Apr 2016 - May 2018
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Designed, developed, and maintained high-performance native iOS applications
              using Swift and Objective-C for social networking, food delivery, service
              booking, CRM, and marketplace platforms. Collaborated with product managers,
              UI/UX designers, and backend teams to translate business requirements into
              scalable mobile solutions while ensuring exceptional user experience and
              application reliability.
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Managed the complete software development lifecycle including mobile
              architecture design, REST API integration, third-party SDK implementation,
              push notifications, performance optimization, testing, debugging, and App
              Store deployment. Applied MVC/MVVM design patterns, code review best
              practices, and Agile methodologies to deliver secure, scalable, and
              enterprise-grade iOS applications with high performance and maintainability.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              iOS Developer
            </h3>

            <p className="text-indigo-400 mt-2">
              Indian Text to Speech Pvt. Ltd | Oct 2013 - Apr 2016
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Developed and maintained native iOS applications using Objective-C and
              Swift, delivering high-quality mobile solutions focused on audio
              streaming, text-to-speech, news, and content-based platforms.
              Collaborated with product managers, UI/UX designers, and backend teams to
              translate business requirements into scalable, user-friendly mobile
              applications with optimal performance and reliability.
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Contributed to the complete mobile application development lifecycle,
              including application design, REST API integration, third-party SDK
              implementation, debugging, performance optimization, testing, and App
              Store deployment. Gained hands-on experience in mobile architecture,
              data management, version control, and application maintenance while
              following coding standards, Agile methodologies, and best practices for
              delivering secure and scalable iOS applications.
            </p>
          </div>

        </div>
      </section>


      {/* Projects */}
      <section className="bg-gray-900 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    MCPH (User & Driver)
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-blue-400 mt-3 text-lg font-medium">
                  Smart Package Delivery & Apartment Logistics Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a complete package management ecosystem consisting of dedicated
                  User and Driver applications. The platform enables apartment residents
                  to track deliveries, receive real-time package notifications, and manage
                  incoming shipments efficiently. The Driver application streamlines package
                  pickup, route management, delivery verification, and logistics operations,
                  creating a seamless end-to-end package handling experience.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/music-city-package-handlers/id6761530493"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center"
                >
                  iOS User App
                </a>

                <a
                  href="https://apps.apple.com/us/app/driver-for-mcph/id6761542589"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center"
                >
                  iOS Driver App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.apps.musiccitytenant"
                  target="_blank"
                  className="bg-green-600 px-5 py-3 rounded-2xl font-semibold text-center"
                >
                  Android User App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.apps.musiccitydriver"
                  target="_blank"
                  className="bg-green-600 px-5 py-3 rounded-2xl font-semibold text-center"
                >
                  Android Driver App
                </a>

              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Real-Time</h4>
                <p className="text-gray-500 text-sm">Package Tracking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Driver</h4>
                <p className="text-gray-500 text-sm">Delivery Management</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Smart</h4>
                <p className="text-gray-500 text-sm">Apartment Logistics</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Cross</h4>
                <p className="text-gray-500 text-sm">Platform Apps</p>
              </div>

            </div>
          </div>


          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    SpitzenMark
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-orange-400 mt-3 text-lg font-medium">
                  Gamified Corporate Wellness & Employee Engagement Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  SpitzenMark is a gamified corporate wellness platform that transforms
                  physical activity into measurable performance, engagement, and team
                  competition. Instead of tracking activity individually, the platform
                  turns movement into a shared experience where employees compete through
                  steps, heart rate, activity levels, leaderboards, and wellness
                  challenges that drive motivation, consistency, and healthier workplace
                  culture.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/spitzenmark/id6767535162"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center"
                >
                  iOS App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.dinein"
                  target="_blank"
                  className="bg-green-600 px-5 py-3 rounded-2xl font-semibold text-center"
                >
                  Android App
                </a>

              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Wellness</h4>
                <p className="text-gray-500 text-sm">Activity Tracking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Live</h4>
                <p className="text-gray-500 text-sm">Leaderboards</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Team</h4>
                <p className="text-gray-500 text-sm">Challenges</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Corporate</h4>
                <p className="text-gray-500 text-sm">Engagement</p>
              </div>

            </div>

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux Toolkit",
                  "REST APIs",
                  "Firebase",
                  "Health Tracking",
                  "Leaderboards",
                  "Push Notifications",
                  "Corporate Wellness",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* add here */}
          
          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-indigo-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    DineInDealz
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-indigo-400 mt-3 text-lg font-medium">
                  Restaurant Discovery & Discount Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Built a scalable cross-platform mobile application that helps users
                  discover restaurants, access exclusive dining offers, and redeem
                  real-time discounts seamlessly. Developed both customer and business
                  applications with modern UI/UX, real-time updates, secure APIs, and
                  performance-focused architecture.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">



                <a
                  href="https://play.google.com/store/apps/details?id=com.dinein_dealz_user"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android User App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.dinein_dealz_business"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android Business App
                </a>

                <a
                  href="https://apps.apple.com/us/app/dinein-dealz-restaurants/id6741513293"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS User App
                </a>

                <a
                  href="https://apps.apple.com/us/app/dinein-dealz-restaurant-deals/id6741512937"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS Business App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">50%</h4>
                <p className="text-gray-500 mt-1 text-sm">Discount Offers</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Deal Updates</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform Apps</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Business</h4>
                <p className="text-gray-500 mt-1 text-sm">Management App</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Firebase",
                  "Redux",
                  "REST APIs",
                  "Push Notifications",
                  "Google Maps",
                  "Real-time Updates",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-indigo-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Shopywhere
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-cyan-400 mt-3 text-lg font-medium">
                  Global Virtual Shopping & E-Commerce Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed an immersive cross-platform shopping application that enables
                  users to explore international stores virtually and purchase products
                  from around the world. Built a seamless shopping experience with secure
                  payment integration, international product discovery, modern UI/UX, and
                  scalable mobile architecture focused on performance and user engagement.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/shoppywhere/id6639615044"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.shoppywhere&hl=en_IN"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Global</h4>
                <p className="text-gray-500 mt-1 text-sm">Shopping Access</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Secure</h4>
                <p className="text-gray-500 mt-1 text-sm">Payment System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Virtual</h4>
                <p className="text-gray-500 mt-1 text-sm">Store Experience</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform App</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "REST APIs",
                  "Payment Gateway",
                  "Firebase",
                  "Push Notifications",
                  "E-Commerce",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Trioworld NA & EU
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-orange-400 mt-3 text-lg font-medium">
                  Industrial Packaging & Stretch Film Solution Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a professional cross-platform mobile application for the
                  packaging industry that helps businesses identify the right stretch film
                  solutions through product calculators, cross-reference tools, brochures,
                  and educational resources. Focused on delivering a clean user
                  experience, fast performance, and simplified access to industrial
                  packaging information and tools.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/malpack-toolbox/id6477567834"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS Trioworld NA App
                </a>

                <a
                  href="https://apps.apple.com/us/app/malpack-toolbox/id6477567834"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS Trioworld EU App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.app.malpack&hl=en_IN"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android Trioworld NA App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.malpacktrioworld"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android Trioworld EU App
                </a>

              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Industrial</h4>
                <p className="text-gray-500 mt-1 text-sm">Packaging Tools</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Smart</h4>
                <p className="text-gray-500 mt-1 text-sm">Film Calculators</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Reference System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Business</h4>
                <p className="text-gray-500 mt-1 text-sm">Product Solutions</p>
              </div>

            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "REST APIs",
                  "Redux",
                  "Firebase",
                  "PDF Integration",
                  "Cross Platform",
                  "Push Notifications",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-yellow-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    iTRUX
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-yellow-400 mt-3 text-lg font-medium">
                  Digital Ticketing & Job Management Platform for Dump Trucks
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a scalable cross-platform mobile application for the trucking
                  and logistics industry that combines digital ticket management with a
                  dedicated job board system for dump truck operations. Focused on
                  streamlining workflow management, improving operational efficiency, and
                  providing real-time access to transportation jobs and ticketing data
                  through an intuitive and performance-driven mobile experience.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/ca/app/itrux/id6480527472"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>

                <a
                  href="https://play.google.com/store/apps/datasafety?id=ca.itrux.app"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Digital</h4>
                <p className="text-gray-500 mt-1 text-sm">Ticketing System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Job Management</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Logistics</h4>
                <p className="text-gray-500 mt-1 text-sm">Industry Solution</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform App</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "REST APIs",
                  "Firebase",
                  "Real-time Updates",
                  "Push Notifications",
                  "Workflow Management",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-purple-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    K-Go
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-purple-400 mt-3 text-lg font-medium">
                  Safe Ride Sharing Platform for Kids & Families
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a secure and scalable cross-platform ride-sharing application
                  designed specifically for children aged 5 to 17. The platform helps
                  parents manage transportation logistics safely while enabling children
                  to participate in school activities, sports, and social events through
                  trusted drivers and real-time ride tracking. Focused on safety-first
                  architecture, smooth user experience, and reliable real-time
                  communication features.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/k-go/id1488105887"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS Guardian App
                </a>

                <a
                  href="https://apps.apple.com/us/app/k-go-driver/id1489214326"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS Driver App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.kgoguardian"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android Guardian App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.kgodriver"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android Driver App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-purple-400">Safe</h4>
                <p className="text-gray-500 mt-1 text-sm">Ride Sharing</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-purple-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Ride Tracking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-purple-400">Trusted</h4>
                <p className="text-gray-500 mt-1 text-sm">Driver Network</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-purple-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform Apps</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "Google Maps",
                  "Real-time Tracking",
                  "REST APIs",
                  "Push Notifications",
                  "Firebase",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>


          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    LSVC
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-blue-400 mt-3 text-lg font-medium">
                  Government Volunteer & Community Engagement Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a scalable cross-platform mobile application for the Lagos
                  State Government focused on volunteer engagement, community
                  participation, and sustainable development initiatives. The platform
                  enables citizens to discover volunteering opportunities, participate in
                  government-led programs, and contribute toward achieving long-term
                  social impact and Sustainable Development Goals (SDGs).
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/lsvc/id1539916407"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.lsvc"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Government</h4>
                <p className="text-gray-500 mt-1 text-sm">Initiative Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Volunteer</h4>
                <p className="text-gray-500 mt-1 text-sm">Community Network</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Sustainable</h4>
                <p className="text-gray-500 mt-1 text-sm">Development Goals</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform App</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "REST APIs",
                  "Firebase",
                  "Push Notifications",
                  "User Authentication",
                  "Community Engagement",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Bus Monitor (Lagos)
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-red-400 mt-3 text-lg font-medium">
                  Intelligent Transportation & Bus Rapid Transit Monitoring System
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Contributed to the development of an Intelligent Transportation System
                  (ITS) solution for Lagos Bus Rapid Transit (BRT) operations under the
                  Lagos Metropolitan Area Transport Authority (LAMATA). The platform was
                  designed to improve transportation efficiency, reduce traffic
                  congestion, and streamline operational planning and scheduling for bus
                  operators through real-time monitoring and centralized resource
                  management.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://play.google.com/store/apps/details?id=com.manata"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-red-400">ITS</h4>
                <p className="text-gray-500 mt-1 text-sm">Transport System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-red-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Bus Monitoring</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-red-400">Centralized</h4>
                <p className="text-gray-500 mt-1 text-sm">Scheduling System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-red-400">Public</h4>
                <p className="text-gray-500 mt-1 text-sm">Transport Solution</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Google Maps",
                  "Real-time Tracking",
                  "REST APIs",
                  "Redux",
                  "Firebase",
                  "Transport Management",
                  "Push Notifications",
                  "Android Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-teal-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    KoastalKarriers
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-teal-400 mt-3 text-lg font-medium">
                  Logistics & On-Demand Delivery Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a modern logistics and delivery management platform designed
                  to simplify transportation operations for vendors, drivers, and
                  recipients. Built scalable customer and driver applications with
                  real-time delivery tracking, route management, order handling, and
                  seamless communication workflows to ensure timely and cost-effective
                  deliveries.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Focused on building a reliable cross-platform mobile experience with
                  optimized performance, intuitive UI/UX, real-time updates, and secure
                  operational workflows for logistics and transportation businesses.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://play.google.com/store/apps/details?id=com.koastalkarriersuser"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android User App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.koastalkarriersdriver"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android Driver App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-teal-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Delivery Tracking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-teal-400">Driver</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-teal-400">Logistics</h4>
                <p className="text-gray-500 mt-1 text-sm">Delivery Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-teal-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform Apps</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "REST APIs",
                  "Firebase",
                  "Google Maps",
                  "Real-time Tracking",
                  "Push Notifications",
                  "Logistics Management",
                  "Android Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-500/10 border border-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-pink-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    HitSavers
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-pink-400 mt-3 text-lg font-medium">
                  Habit Building, Wellness & Productivity Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a wellness-focused cross-platform mobile application designed
                  to help users build positive daily habits through short science-based
                  actionable activities. The platform encourages healthier lifestyles,
                  improved focus, better productivity, and long-term behavioral growth
                  through guided routines and engaging user experiences.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Built an intuitive and performance-optimized mobile experience featuring
                  habit tracking, personalized activities, motivational workflows, and
                  easy-to-follow wellness routines that users can complete in as little
                  as 9 minutes per day.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/hitsavers/id1499091385"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.hitsavers"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-pink-400">9-Minute</h4>
                <p className="text-gray-500 mt-1 text-sm">Daily Activities</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-pink-400">Science</h4>
                <p className="text-gray-500 mt-1 text-sm">Based Routines</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-pink-400">Habit</h4>
                <p className="text-gray-500 mt-1 text-sm">Building Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-pink-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform App</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "Firebase",
                  "REST APIs",
                  "Push Notifications",
                  "Habit Tracking",
                  "Health & Wellness",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-500/10 border border-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    RentersVine
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-cyan-400 mt-3 text-lg font-medium">
                  Property Rental & Marketplace Management Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a modern cross-platform property rental marketplace designed
                  to simplify interactions between renters, landlords, and property
                  managers. The platform streamlines property discovery, communication,
                  rental management, and marketplace operations while delivering a smooth
                  and scalable mobile experience for all stakeholders.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Focused on building a user-centric real estate solution with optimized
                  workflows, secure data handling, responsive UI/UX, and seamless
                  property management functionality to improve marketplace efficiency and
                  customer engagement.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/rentersvine/id1483556162?ls=1"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=app.rentersvine&hl=en_IN"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-2xl font-semibold text-center transition"
                >
                  Android App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Property</h4>
                <p className="text-gray-500 mt-1 text-sm">Marketplace Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Rental</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Landlord</h4>
                <p className="text-gray-500 mt-1 text-sm">Communication Flow</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Cross</h4>
                <p className="text-gray-500 mt-1 text-sm">Platform App</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "REST APIs",
                  "Firebase",
                  "Real Estate Platform",
                  "Push Notifications",
                  "User Authentication",
                  "App Store Deployment",
                  "Play Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Rench User / Driver
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-amber-400 mt-3 text-lg font-medium">
                  On-Demand Vehicle Breakdown & Mechanic Assistance Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a real-time on-demand roadside assistance platform connecting
                  vehicle owners with nearby professional mechanics during breakdown
                  situations. Built customer and driver applications focused on fast
                  service requests, real-time mechanic tracking, seamless communication,
                  and efficient emergency assistance workflows.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Designed and optimized the mobile experience to simplify vehicle
                  service discovery, improve response time, and deliver a reliable
                  emergency support system with location-based services and smooth user
                  interaction flows.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/in/app/renchuser/id1491284762"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS User App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-amber-400">On-Demand</h4>
                <p className="text-gray-500 mt-1 text-sm">Mechanic Search</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-amber-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Service Tracking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-amber-400">Emergency</h4>
                <p className="text-gray-500 mt-1 text-sm">Roadside Support</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-amber-400">Location</h4>
                <p className="text-gray-500 mt-1 text-sm">Based Services</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "Google Maps",
                  "REST APIs",
                  "Firebase",
                  "Real-time Tracking",
                  "Push Notifications",
                  "Location Services",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-amber-500/10 border border-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-rose-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    NeedAmbulance User / Driver
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-rose-400 mt-3 text-lg font-medium">
                  Emergency Ambulance Booking & Real-Time Healthcare Transport Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a real-time emergency ambulance booking platform that enables
                  users to instantly request ambulances based on medical requirements and
                  vehicle type preferences. Built dedicated user and driver applications
                  focused on emergency response management, live vehicle tracking,
                  seamless communication, and efficient healthcare transportation
                  workflows.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Implemented advanced features including real-time ambulance tracking,
                  scheduled bookings, in-app calling, detailed billing management, and
                  medical service selection to provide a reliable, fast, and user-friendly
                  emergency assistance experience.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://apps.apple.com/us/app/needambulance/id1458582863?ls=1"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS User App
                </a>

                <a
                  href="https://apps.apple.com/us/app/needambulancedriver/id1458479165?ls=1"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS Driver App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-rose-400">Emergency</h4>
                <p className="text-gray-500 mt-1 text-sm">Ambulance Booking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-rose-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Vehicle Tracking</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-rose-400">Medical</h4>
                <p className="text-gray-500 mt-1 text-sm">Service Selection</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-rose-400">Scheduled</h4>
                <p className="text-gray-500 mt-1 text-sm">Advance Booking</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "Google Maps",
                  "REST APIs",
                  "Firebase",
                  "Real-time Tracking",
                  "Push Notifications",
                  "Healthcare Platform",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-rose-500/10 border border-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>


          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Houzchef
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-orange-400 mt-3 text-lg font-medium">
                  Home Chef Food Delivery & Marketplace Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a unique food delivery marketplace platform designed
                  specifically for talented home chefs to showcase and sell their
                  signature dishes directly to customers. The application enables chefs
                  to manage menus, display specialties, receive orders, and build their
                  own customer base through a seamless and user-friendly mobile
                  experience.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Focused on creating a scalable on-demand food ordering system with
                  intuitive UI/UX, smooth order workflows, secure customer interactions,
                  and performance-optimized mobile experiences for both chefs and food
                  lovers.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://itunes.apple.com/us/app/houzchef/id1382338106?ls=1&mt=8"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Food</h4>
                <p className="text-gray-500 mt-1 text-sm">Delivery Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Home Chef</h4>
                <p className="text-gray-500 mt-1 text-sm">Marketplace</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Order</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-orange-400">Scalable</h4>
                <p className="text-gray-500 mt-1 text-sm">Mobile Platform</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Redux",
                  "REST APIs",
                  "Firebase",
                  "Food Delivery Platform",
                  "Push Notifications",
                  "Order Management",
                  "Payment Integration",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-violet-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Cisner
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-violet-400 mt-3 text-lg font-medium">
                  Global Communication & Social Networking Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed an interactive social communication platform designed to
                  connect people globally through modern digital experiences and creative
                  engagement services. The application focused on enabling seamless
                  communication, social interaction, and content sharing while delivering
                  an intuitive and performance-driven mobile experience.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Contributed to building scalable mobile solutions with optimized UI/UX,
                  real-time interactions, secure communication workflows, and smooth user
                  engagement features tailored for modern social networking experiences.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://itunes.apple.com/us/app/cisner/id1339549954?mt=8"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-violet-400">Global</h4>
                <p className="text-gray-500 mt-1 text-sm">Communication</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-violet-400">Social</h4>
                <p className="text-gray-500 mt-1 text-sm">Networking Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-violet-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">User Engagement</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-violet-400">Creative</h4>
                <p className="text-gray-500 mt-1 text-sm">Digital Services</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Real-time Communication",
                  "Push Notifications",
                  "Social Networking",
                  "UI/UX Optimization",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-violet-500/10 border border-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-yellow-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    StreetFoodMadness (SFM)
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Live Project
                  </span>
                </div>

                <p className="text-yellow-400 mt-3 text-lg font-medium">
                  Food Truck Discovery & Street Food Delivery Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed an innovative food delivery and discovery platform designed
                  to connect food truck owners with street food enthusiasts through a
                  seamless mobile experience. The application enabled users to explore
                  popular food trucks, discover trending street food options, and order
                  their favorite delicacies directly from nearby vendors.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Focused on building an engaging and scalable mobile platform with
                  intuitive UI/UX, location-based food discovery, streamlined ordering
                  workflows, and smooth customer interactions to enhance the overall
                  street food experience.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://itunes.apple.com/in/app/street-food-madness/id1115089177?mt=8"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Food Truck</h4>
                <p className="text-gray-500 mt-1 text-sm">Marketplace</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Street Food</h4>
                <p className="text-gray-500 mt-1 text-sm">Discovery Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Location</h4>
                <p className="text-gray-500 mt-1 text-sm">Based Services</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-yellow-400">Order</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Location Services",
                  "Push Notifications",
                  "Food Delivery Platform",
                  "UI/UX Optimization",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>


          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-fuchsia-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    BuzzTiger
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Event Management Platform
                  </span>
                </div>

                <p className="text-fuchsia-400 mt-3 text-lg font-medium">
                  Event Discovery, Artist & Venue Management Application
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a feature-rich event management and discovery platform focused
                  on connecting users with trending events, artists, and venues across
                  Mumbai. The application enabled users to explore featured events,
                  register as artists or venue owners, create and manage events, and
                  engage with the community through ratings and reviews.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Implemented real-time notifications, location-based event discovery,
                  review systems, and interactive engagement features to enhance user
                  participation and improve visibility for event organizers, artists, and
                  venues within the entertainment ecosystem.
                </p>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-fuchsia-400">Event</h4>
                <p className="text-gray-500 mt-1 text-sm">Discovery Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-fuchsia-400">Artist</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-fuchsia-400">Venue</h4>
                <p className="text-gray-500 mt-1 text-sm">Registration Flow</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-fuchsia-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">Notifications</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Push Notifications",
                  "Location Services",
                  "Event Management",
                  "Ratings & Reviews",
                  "Real-time Engagement",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Antstein
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    CRM & Team Management Platform
                  </span>
                </div>

                <p className="text-sky-400 mt-3 text-lg font-medium">
                  Enterprise CRM, Project & Role-Based Management System
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a comprehensive CRM and business management platform designed
                  to streamline company operations, project tracking, team collaboration,
                  invoice management, and workflow execution. The application included
                  multiple enterprise modules such as Companies, Products, Projects,
                  Team Leaders, Team Members, Invoices, and Estimates to support
                  scalable organizational management.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Implemented advanced role-based access control systems for Super Admin,
                  Company, Team Leader, and Team Member user types, ensuring secure and
                  permission-based access management across all platform functionalities.
                  Focused on improving operational efficiency, task management, and team
                  productivity through a structured and scalable mobile solution.
                </p>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-sky-400">CRM</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-sky-400">Role-Based</h4>
                <p className="text-gray-500 mt-1 text-sm">Access Control</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-sky-400">Project</h4>
                <p className="text-gray-500 mt-1 text-sm">Workflow Management</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-sky-400">Enterprise</h4>
                <p className="text-gray-500 mt-1 text-sm">Business Solution</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Role-Based Authentication",
                  "CRM Platform",
                  "Project Management",
                  "Invoice Management",
                  "Enterprise Workflow",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-sky-500/10 border border-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Curis Doctor / Patient
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Healthcare Platform
                  </span>
                </div>

                <p className="text-emerald-400 mt-3 text-lg font-medium">
                  Digital Healthcare, Online Consultation & Appointment Management System
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed a comprehensive healthcare platform connecting doctors and
                  patients through secure online consultations, appointment scheduling,
                  and digital health management services. Built dedicated applications
                  for doctors and patients to streamline healthcare accessibility,
                  communication, and medical record management through a modern mobile
                  experience.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Implemented features including online doctor consultations, appointment
                  booking, digital medical records, visit charge management, secure
                  patient communication, and healthcare workflow optimization to improve
                  user convenience and overall patient care experiences.
                </p>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-emerald-400">Online</h4>
                <p className="text-gray-500 mt-1 text-sm">Doctor Consultation</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-emerald-400">Appointment</h4>
                <p className="text-gray-500 mt-1 text-sm">Management System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-emerald-400">Digital</h4>
                <p className="text-gray-500 mt-1 text-sm">Medical Records</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-emerald-400">Healthcare</h4>
                <p className="text-gray-500 mt-1 text-sm">Mobile Platform</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Healthcare Platform",
                  "Appointment Scheduling",
                  "Push Notifications",
                  "Real-time Communication",
                  "Digital Medical Records",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-indigo-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    doUdo
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Business Networking Platform
                  </span>
                </div>

                <p className="text-indigo-400 mt-3 text-lg font-medium">
                  Lead Generation, Networking & Business Collaboration Platform
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed an intelligent business networking and lead-generation
                  platform designed to connect startups, small businesses, family-owned
                  businesses, and professionals through shared interests and relevant
                  business tags. The application enabled users to discover new business
                  opportunities, build meaningful professional relationships, and
                  collaborate efficiently within a scalable digital ecosystem.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Focused on creating a seamless and engagement-driven mobile experience
                  with smart networking workflows, personalized lead discovery, secure
                  communication channels, and optimized search capabilities to enhance
                  professional collaboration and business growth.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://itunes.apple.com/us/app/safe-i-ride/id1184268954?mt=8"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Lead</h4>
                <p className="text-gray-500 mt-1 text-sm">Generation Platform</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Business</h4>
                <p className="text-gray-500 mt-1 text-sm">Networking System</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Smart</h4>
                <p className="text-gray-500 mt-1 text-sm">Tag-Based Matching</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-indigo-400">Professional</h4>
                <p className="text-gray-500 mt-1 text-sm">Collaboration Platform</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Business Networking",
                  "Lead Management",
                  "Push Notifications",
                  "Smart Search",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    Timeline Feeds
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    News & Media Platform
                  </span>
                </div>

                <p className="text-cyan-400 mt-3 text-lg font-medium">
                  Real-Time News Timeline & Personalized Media Discovery Application
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed an intelligent news aggregation and timeline-based media
                  platform that enabled users to explore trending stories, follow
                  real-time news updates, and navigate personalized content sections
                  through a modern and interactive mobile experience. The application
                  focused on delivering time-sensitive information in an organized and
                  user-friendly timeline format.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Implemented advanced features including article sharing, keyword-based
                  story categorization, favorite news section management, location-aware
                  notifications, and real-time top news updates to improve user
                  engagement and content discovery across the platform.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://itunes.apple.com/us/app/timeline-feeds/id906357155?ls=1&mt=8"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">News Updates</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Timeline</h4>
                <p className="text-gray-500 mt-1 text-sm">Story Experience</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Keyword</h4>
                <p className="text-gray-500 mt-1 text-sm">Content Discovery</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">Personalized</h4>
                <p className="text-gray-500 mt-1 text-sm">News Feed</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "News Aggregation",
                  "Push Notifications",
                  "Real-time Updates",
                  "Content Management",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>


          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[32px] p-8 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl overflow-hidden">

            {/* Top Glow */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* Header */}

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">


              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    NewsBuds
                  </h3>

                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-500/20">
                    Audio News Platform
                  </span>
                </div>

                <p className="text-blue-400 mt-3 text-lg font-medium">
                  Audio-Based News Reading & Regional Media Discovery Application
                </p>

                <p className="text-gray-400 mt-6 leading-8 text-lg max-w-3xl">
                  Developed an innovative audio-driven news application that transformed
                  traditional news consumption by enabling users to listen to news
                  articles instead of reading them. The platform provided seamless access
                  to regional newspapers, real-time news updates, and full-length
                  articles through an intuitive and user-friendly mobile experience.
                </p>

                <p className="text-gray-500 mt-5 leading-8 text-base max-w-3xl">
                  Implemented integrated audio playback functionality, personalized news
                  discovery, category-based navigation, and optimized content delivery
                  systems to enhance accessibility, improve user engagement, and deliver
                  a modern hands-free news consumption experience.
                </p>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-3 min-w-fit">

                <a
                  href="https://itunes.apple.com/us/app/news-buds/id1008700841?ls=1&mt=8"
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  iOS App
                </a>
              </div>


            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">


              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Audio</h4>
                <p className="text-gray-500 mt-1 text-sm">News Experience</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Regional</h4>
                <p className="text-gray-500 mt-1 text-sm">News Access</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Real-time</h4>
                <p className="text-gray-500 mt-1 text-sm">News Updates</p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-blue-400">Content</h4>
                <p className="text-gray-500 mt-1 text-sm">Media Platform</p>
              </div>


            </div>

            {/* Tech Stack */}

            <div className="relative z-10 mt-10">
              <h4 className="text-xl font-semibold text-white mb-5">
                Tech Stack
              </h4>


              <div className="flex flex-wrap gap-3">
                {[
                  "iOS Development",
                  "Swift",
                  "REST APIs",
                  "Firebase",
                  "Audio Streaming",
                  "News Aggregation",
                  "Push Notifications",
                  "Content Management",
                  "App Store Deployment",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </div>
          </div>


          {/* //new */}



        </div>
      </section>
      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-400 mt-6 text-lg leading-8">
          Looking for an experienced React Native developer or technical team
          leader for your next mobile application project?
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:jignasa1010@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-2xl font-semibold"
          >
            Email Me
          </a>

          <a
            href="tel:+918160438429"
            className="border border-gray-500 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Contact Number
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Jignasa Kapadiya • Senior React Native Developer
      </footer>
    </div>
  );
}