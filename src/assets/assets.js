import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
  {
    _id: "course_js_01",
    courseTitle: "Introduction to JavaScript",
    courseDescription: `
      <h2>Learn the Basics of JavaScript</h2>
      <p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p>
      <ul>
        <li>Understand the basics of programming</li>
        <li>Learn how to manipulate the DOM</li>
        <li>Create dynamic web applications</li>
      </ul>
    `,
    coursePrice: 8.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with JavaScript",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is JavaScript?",
            lectureDuration: 15,
            lectureUrl: "https://youtu.be/W6NZfCO5SIk", // JS intro by Mosh
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Your Environment",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/qz0aGYrrlhU", // Setup tutorial
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "educator_01",
    enrolledStudents: ["user_01", "user_02"],
    courseRatings: [{ userId: "user_01", rating: 5 }],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    courseThumbnail:
      "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
  },
  {
  "_id": "mern_stack_01",
  "courseTitle": "MERN Stack Mastery",
  "courseDescription": "<h2>Build Full-Stack Apps with MongoDB, Express, React & Node</h2><p>Go from zero to deployment with the MERN stack. You’ll learn React on the front end, Node/Express on the back end, MongoDB for data, authentication with JWT, and deployment.</p><ul><li>Modern React (hooks, routing, context)</li><li>REST APIs with Node & Express</li><li>MongoDB schemas, models & queries</li><li>Auth (JWT, protected routes, roles)</li><li>Production build & deployment</li></ul>",
  "coursePrice": 34.99,
  "isPublished": true,
  "discount": 30,
  enrolledStudents: ["user001", "user002", "user099", "user777"],
 courseRatings: [{ userId: "user_01", rating: 4 }],
  "courseContent": [
    {
      "chapterId": "chapter1",
      "chapterOrder": 1,
      "chapterTitle": "Frontend with React",
      "chapterContent": [
        {
          "lectureId": "lecture1",
          "lectureTitle": "React Fundamentals: Components, Props & State",
          "lectureDuration": 22,
          "lectureUrl": "https://youtu.be/Tn6-PIqc4UM",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "lecture2",
          "lectureTitle": "Routing & Global State (React Router + Context)",
          "lectureDuration": 28,
          "lectureUrl": "https://youtu.be/0ZJgIjIuY7U",
          "isPreviewFree": false,
          "lectureOrder": 2
        }
      ]
    },
    {
      "chapterId": "chapter2",
      "chapterOrder": 2,
      "chapterTitle": "Backend with Node & Express",
      "chapterContent": [
        {
          "lectureId": "lecture3",
          "lectureTitle": "Build a REST API with Express",
          "lectureDuration": 30,
          "lectureUrl": "https://youtu.be/Oe421EPjeBE",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "lecture4",
          "lectureTitle": "JWT Authentication & Protected Routes",
          "lectureDuration": 32,
          "lectureUrl": "https://youtu.be/7nafaH9SddU",
          "isPreviewFree": false,
          "lectureOrder": 2
        }
      ]
    },
    {
      "chapterId": "chapter3",
      "chapterOrder": 3,
      "chapterTitle": "Database with MongoDB",
      "chapterContent": [
        {
          "lectureId": "lecture5",
          "lectureTitle": "MongoDB Models, Schemas & Mongoose",
          "lectureDuration": 26,
          "lectureUrl": "https://youtu.be/ofme2o29ngU",
          "isPreviewFree": false,
          "lectureOrder": 1
        },
        {
          "lectureId": "lecture6",
          "lectureTitle": "CRUD Operations & Query Best Practices",
          "lectureDuration": 27,
          "lectureUrl": "https://youtu.be/AYDP1S5BbV0",
          "isPreviewFree": false,
          "lectureOrder": 2
        }
      ]
    }
  ],
  "educator": "675ac1512100b91a6d9b8b24",
  "enrolledStudents": [
    "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    "user_abc123xyz",
    "user_mernstu01"
  ],
  "createdAt": "2025-01-10T08:00:00.000Z",
  "updatedAt": "2025-01-10T09:15:00.000Z",
  "__v": 1,
  "courseThumbnail": "https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg"
}
,
  {
  _id: "datascience_bootcamp_01",
  courseTitle: "Data Science & Machine Learning – Zero to Hero Bootcamp",
  courseThumbnail: "https://img.youtube.com/vi/ua-CiDNNj30/maxresdefault.jpg",
  coursePrice: 129.99,
  discount: 35,
  isPublished: true,
  educator: "educator_ds",
  enrolledStudents: ["user001", "user002", "user099", "user777"],
 courseRatings: [{ userId: "user_01", rating: 3 }],
  courseDescription: `
    <h2>Full Data Science & ML Bootcamp</h2>
    <p>Python, Pandas, Machine Learning, Deep Learning, and Real Projects.</p>
    <ul>
      <li>Data cleaning</li>
      <li>Build ML Models</li>
      <li>Neural Networks using TensorFlow</li>
    </ul>
  `,
  courseContent: [
    {
      chapterId: "chapter1",
      chapterOrder: 1,
      chapterTitle: "Python for Data Science",
      chapterContent: [
        {
          lectureId: "lecture1",
          lectureTitle: "Python Basics",
          lectureDuration: 35,
          lectureUrl: "https://youtu.be/ua-CiDNNj30",
          isPreviewFree: true,
          lectureOrder: 1
        }
      ]
    }
  ]
}
,
{
  _id: "devops_bootcamp_01",
  courseTitle: "DevOps Bootcamp: Docker, Kubernetes, CI/CD & Cloud",
  courseThumbnail: "https://img.youtube.com/vi/hQcFE0RD0cQ/maxresdefault.jpg",
  coursePrice: 119.99,
  discount: 30,
  isPublished: true,
  educator: "educator_devops",
  enrolledStudents: ["user201", "user202", "user303", "user404", "user505"],
  courseRatings: [{ userId: "user_01", rating: 4 }],
  courseDescription: `
    <h2>Master DevOps from Zero to Pro</h2>
    <p>End-to-end DevOps: Git, CI/CD, Docker, Kubernetes, Terraform, AWS, and monitoring. Build production-grade pipelines and deploy microservices.</p>
    <ul>
      <li>Hands-on CI/CD with GitHub Actions</li>
      <li>Docker & Kubernetes for container orchestration</li>
      <li>Infrastructure as Code with Terraform</li>
      <li>Deploy to AWS and monitor with Prometheus + Grafana</li>
    </ul>
  `,
  courseContent: [
    {
      chapterId: "devops_ch1",
      chapterOrder: 1,
      chapterTitle: "DevOps Foundations",
      chapterContent: [
        {
          lectureId: "devops_lecture1",
          lectureTitle: "What is DevOps? Culture, Tools & Practices",
          lectureDuration: 20,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "devops_lecture2",
          lectureTitle: "Git & GitHub for DevOps",
          lectureDuration: 30,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "devops_ch2",
      chapterOrder: 2,
      chapterTitle: "CI/CD Pipelines",
      chapterContent: [
        {
          lectureId: "devops_lecture3",
          lectureTitle: "CI/CD Concepts & Pipeline Design",
          lectureDuration: 28,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "devops_lecture4",
          lectureTitle: "Build CI/CD with GitHub Actions",
          lectureDuration: 36,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "devops_ch3",
      chapterOrder: 3,
      chapterTitle: "Containerization with Docker",
      chapterContent: [
        {
          lectureId: "devops_lecture5",
          lectureTitle: "Docker Images, Containers & Compose",
          lectureDuration: 40,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "devops_lecture6",
          lectureTitle: "Multi-stage Builds & Best Practices",
          lectureDuration: 32,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "devops_ch4",
      chapterOrder: 4,
      chapterTitle: "Kubernetes Orchestration",
      chapterContent: [
        {
          lectureId: "devops_lecture7",
          lectureTitle: "K8s Basics: Pods, Deployments, Services",
          lectureDuration: 42,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "devops_lecture8",
          lectureTitle: "Ingress, ConfigMaps & Secrets",
          lectureDuration: 35,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "devops_ch5",
      chapterOrder: 5,
      chapterTitle: "Cloud, IaC & Monitoring",
      chapterContent: [
        {
          lectureId: "devops_lecture9",
          lectureTitle: "Provision AWS with Terraform",
          lectureDuration: 38,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "devops_lecture10",
          lectureTitle: "Observability: Prometheus & Grafana",
          lectureDuration: 33,
          lectureUrl: "https://youtu.be/hQcFE0RD0cQ",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    }
  ],
  createdAt: "2025-01-07T09:00:00.000Z",
  updatedAt: "2025-01-07T11:00:00.000Z",
  __v: 1
}
,{
  _id: "system_design_01",
  courseTitle: "System Design Masterclass: Scale to Millions",
  courseThumbnail: "https://img.youtube.com/vi/tv-_1er1mWI/maxresdefault.jpg",
  coursePrice: 80.99,
  discount: 35,
  isPublished: true,
  educator: "educator_systemdesign",
  enrolledStudents: ["user201", "user333", "user404", "user555", "user777"],
 
 courseRatings: [{ userId: "user_01", rating: 2 }],
  courseDescription: `
    <h2>Crack System Design Interviews & Build Real Systems</h2>
    <p>Learn fundamentals, scalability patterns, databases, caching, queues, microservices, and real case studies (URL shortener, Instagram, Uber, etc.).</p>
    <ul>
      <li>Capacity planning, SLAs/SLOs, and back-of-the-envelope estimates</li>
      <li>Load balancers, caching (CDN/Redis), sharding, replication</li>
      <li>Event-driven architectures with queues & streams</li>
      <li>Design real-world systems step by step</li>
    </ul>
  `,
  courseContent: [
    {
      chapterId: "sd_ch1",
      chapterOrder: 1,
      chapterTitle: "Foundations of System Design",
      chapterContent: [
        {
          lectureId: "sd_l1",
          lectureTitle: "Latency, Throughput, Availability, Consistency",
          lectureDuration: 24,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "sd_l2",
          lectureTitle: "CAP, PACELC & Trade-offs",
          lectureDuration: 28,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "sd_ch2",
      chapterOrder: 2,
      chapterTitle: "Scaling Building Blocks",
      chapterContent: [
        {
          lectureId: "sd_l3",
          lectureTitle: "Load Balancers, Caching & CDNs",
          lectureDuration: 30,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "sd_l4",
          lectureTitle: "Databases: SQL vs NoSQL, Sharding & Replication",
          lectureDuration: 36,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 2
        },
        {
          lectureId: "sd_l5",
          lectureTitle: "Queues, Streams & Event-Driven Design",
          lectureDuration: 32,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 3
        }
      ]
    },
    {
      chapterId: "sd_ch3",
      chapterOrder: 3,
      chapterTitle: "Case Studies",
      chapterContent: [
        {
          lectureId: "sd_l6",
          lectureTitle: "Design a URL Shortener",
          lectureDuration: 35,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "sd_l7",
          lectureTitle: "Design Instagram-like Feed",
          lectureDuration: 40,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 2
        },
        {
          lectureId: "sd_l8",
          lectureTitle: "Design Ride Hailing (Dispatch, ETA, Geo-Index)",
          lectureDuration: 45,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 3
        }
      ]
    },
    {
      chapterId: "sd_ch4",
      chapterOrder: 4,
      chapterTitle: "Reliability & Observability",
      chapterContent: [
        {
          lectureId: "sd_l9",
          lectureTitle: "SLA/SLO/SLA Error Budgets & Circuit Breakers",
          lectureDuration: 28,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "sd_l10",
          lectureTitle: "Monitoring, Tracing & Autoscaling",
          lectureDuration: 30,
          lectureUrl: "https://youtu.be/tv-_1er1mWI",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    }
  ],
  createdAt: "2025-01-08T10:00:00.000Z",
  updatedAt: "2025-01-08T11:00:00.000Z",
  __v: 1
}
,{
  _id: "deep_learning_01",
  courseTitle: "Deep Learning Masterclass: Neural Networks to GPT",
  courseThumbnail: "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg",
  coursePrice: 100.99,
  discount: 25,
  isPublished: true,
  educator: "educator_dl_01",
  enrolledStudents: ["user001", "user002", "user099", "user777"],
 courseRatings: [{ userId: "user_01", rating: 5 }],
  courseDescription: `
    <h2>Become a Deep Learning Expert</h2>
    <p>Master neural networks, CNNs, RNNs, autoencoders, transformers, and deployment. 
    Learn using TensorFlow & PyTorch with real projects.</p>
    <ul>
      <li>Build neural networks from scratch</li>
      <li>Train CNNs for image classification</li>
      <li>RNNs & LSTMs for NLP</li>
      <li>Transformers and large language models</li>
      <li>Model optimization & real-world deployment</li>
    </ul>
  `,
  courseContent: [
    {
      chapterId: "dl_ch1",
      chapterOrder: 1,
      chapterTitle: "Introduction to Deep Learning",
      chapterContent: [
        {
          lectureId: "dl_l1",
          lectureTitle: "What is Deep Learning?",
          lectureDuration: 20,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "dl_l2",
          lectureTitle: "Neural Networks Basics (Perceptrons, Activation)",
          lectureDuration: 25,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "dl_ch2",
      chapterOrder: 2,
      chapterTitle: "Building Neural Networks",
      chapterContent: [
        {
          lectureId: "dl_l3",
          lectureTitle: "Forward & Backpropagation Explained",
          lectureDuration: 35,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: true,
          lectureOrder: 1
        },
        {
          lectureId: "dl_l4",
          lectureTitle: "Implementing in Python & NumPy",
          lectureDuration: 40,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "dl_ch3",
      chapterOrder: 3,
      chapterTitle: "Computer Vision (CNNs)",
      chapterContent: [
        {
          lectureId: "dl_l5",
          lectureTitle: "Convolution, Pooling & Filters",
          lectureDuration: 38,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "dl_l6",
          lectureTitle: "Image Classification Project",
          lectureDuration: 50,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "dl_ch4",
      chapterOrder: 4,
      chapterTitle: "NLP: RNN, LSTM, Transformers",
      chapterContent: [
        {
          lectureId: "dl_l7",
          lectureTitle: "RNN & LSTM Explained",
          lectureDuration: 40,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "dl_l8",
          lectureTitle: "Transformers, Self-Attention & GPT",
          lectureDuration: 45,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    },
    {
      chapterId: "dl_ch5",
      chapterOrder: 5,
      chapterTitle: "Deployment & Real Projects",
      chapterContent: [
        {
          lectureId: "dl_l9",
          lectureTitle: "Export Models & Use in Apps (TensorFlow Lite, ONNX)",
          lectureDuration: 30,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 1
        },
        {
          lectureId: "dl_l10",
          lectureTitle: "Final Deep Learning Project",
          lectureDuration: 55,
          lectureUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
          isPreviewFree: false,
          lectureOrder: 2
        }
      ]
    }
  ],
  createdAt: "2025-01-09T10:00:00.000Z",
  updatedAt: "2025-01-09T11:00:00.000Z",
  __v: 1
}
,
  {
    _id: "course_py_01",
    courseTitle: "Advanced Python Programming",
    courseDescription: `
      <h2>Deep Dive into Python Programming</h2>
      <p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p>
      <ul>
        <li>Master advanced data structures</li>
        <li>Implement object-oriented programming concepts</li>
        <li>Work with libraries and frameworks</li>
      </ul>
    `,
    coursePrice: 18.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Advanced Data Structures",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Lists and Tuples",
            lectureDuration: 25,
            lectureUrl: "https://youtu.be/_uQrJ0TkZlc", // Python full course
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Dictionaries and Sets",
            lectureDuration: 30,
            lectureUrl: "https://youtu.be/kqtD5dpn9C8", // Python crash course
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "educator_02",
    enrolledStudents: ["user_01"],
    courseRatings: [{ userId: "user_02", rating: 4 }],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T06:47:54.446Z",
    courseThumbnail:
      "https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
  },
  {
    _id: "course_ds_01",
    courseTitle: "Data Science with Python",
    courseDescription: `
      <h2>Start Your Data Science Journey</h2>
      <p>This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, and Matplotlib.</p>
      <ul>
        <li>Data cleaning and preprocessing</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Build predictive models</li>
      </ul>
    `,
    coursePrice: 24.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Python for Data Science",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Python Basics",
            lectureDuration: 30,
            lectureUrl: "https://youtu.be/r-uOLxNrNk8", // Data science intro
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Working with Pandas",
            lectureDuration: 35,
            lectureUrl: "https://youtu.be/vmEHCJofslg", // Pandas tutorial
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "educator_03",
    enrolledStudents: ["user_03", "user_04"],
    courseRatings: [],
    createdAt: "2024-12-27T10:00:00.000Z",
    updatedAt: "2024-12-31T09:57:48.992Z",
    courseThumbnail:
      "https://img.youtube.com/vi/r-uOLxNrNk8/maxresdefault.jpg",
  },

  {
    "_id": "605c72efb3f1c2b1f8e4e1af",
    "courseTitle": "Java Full Course",
    "courseDescription": "<h2>Master Java Programming</h2><p>This course is designed to take you from beginner to advanced in Java. You will learn the fundamentals, object-oriented programming, data structures, and advanced concepts like multithreading and JDBC.</p><ul><li>Understand Java basics and syntax</li><li>Master OOP concepts</li><li>Learn Data Structures & Algorithms</li><li>Work with databases using JDBC</li></ul>",
    "coursePrice": 20.99,
    "isPublished": true,
    "discount": 25,
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "Java Basics",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "Introduction to Java",
            "lectureDuration": 15,
            "lectureUrl": "https://youtu.be/grEKMHGYyns",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Variables and Data Types",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/GoXwIVyNvX0",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "Object-Oriented Programming",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "Classes and Objects",
            "lectureDuration": 25,
            "lectureUrl": "https://youtu.be/8cm1x4bC610",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Inheritance & Polymorphism",
            "lectureDuration": 30,
            "lectureUrl": "https://youtu.be/Kp1r0rJNZ-A",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
    ],
    "courseRatings": [
      {
        "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        "rating": 4,
        "_id": "6776eabc99da8a0f414d8101"
      }
    ],
    "createdAt": "2025-01-03T08:00:00.000Z",
    "updatedAt": "2025-01-03T08:20:00.000Z",
    "__v": 1,
    "courseThumbnail": "https://img.youtube.com/vi/grEKMHGYyns/maxresdefault.jpg"
  },
  {
    "_id": "605c72efb3f1c2b1f8e4e1b0",
    "courseTitle": "React Mastery Course",
    "courseDescription": "<h2>Learn React from Scratch</h2><p>This course teaches you how to build modern web applications using React.js. You will cover components, props, state management, hooks, and advanced topics like context API and Redux.</p><ul><li>Understand React fundamentals</li><li>Work with components and hooks</li><li>Learn state management with Context & Redux</li><li>Build a full project with React</li></ul>",
    "coursePrice": 12.99,
    "isPublished": true,
    "discount": 30,
    enrolledStudents: ["user001", "user002", "user099", "user777"],
 courseRatings: [{ userId: "user_01", rating: 1 }],
    "courseContent": [
      {
        "chapterId": "chapter1",
        "chapterOrder": 1,
        "chapterTitle": "React Basics",
        "chapterContent": [
          {
            "lectureId": "lecture1",
            "lectureTitle": "What is React?",
            "lectureDuration": 12,
            "lectureUrl": "https://youtu.be/Tn6-PIqc4UM",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture2",
            "lectureTitle": "Components & Props",
            "lectureDuration": 18,
            "lectureUrl": "https://youtu.be/5K_nJ0jz0w8",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      },
      {
        "chapterId": "chapter2",
        "chapterOrder": 2,
        "chapterTitle": "State & Hooks",
        "chapterContent": [
          {
            "lectureId": "lecture3",
            "lectureTitle": "useState & useEffect",
            "lectureDuration": 20,
            "lectureUrl": "https://youtu.be/0ZJgIjIuY7U",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lecture4",
            "lectureTitle": "Context API",
            "lectureDuration": 25,
            "lectureUrl": "https://youtu.be/35lXWvCuM8o",
            "isPreviewFree": false,
            "lectureOrder": 2
          }
        ]
      }
    ],
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
    ],
    "courseRatings": [
      {
        "userId": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "rating": 1,
        "_id": "6776eb3999da8a0f414d8102"
      }
    ],
    "createdAt": "2025-01-03T09:00:00.000Z",
    "updatedAt": "2025-01-03T09:15:00.000Z",
    "__v": 1,
    "courseThumbnail": "https://img.youtube.com/vi/Tn6-PIqc4UM/maxresdefault.jpg"
  },
  
  {
  _id: "mysql_full_live",
  courseTitle: "MySQL Full Course",
  courseThumbnail: "https://img.youtube.com/vi/ER8oKX5myE0/maxresdefault.jpg", // from the "MySQL Database - Full Course" video :contentReference[oaicite:2]{index=2}
  coursePrice: 149,
  discount: 20,
  educator: { name: "GreatStack" },
  courseRatings: [{ userId: "user_01", rating: 2 }],
  enrolledStudents: ["user001", "user002", "user099", "user777"],
  courseDescription: `
    Comprehensive MySQL course using a real full-course video. 
    Learn database creation, queries, joins, subqueries, indexing, optimization, and more.
    Real video content + hands-on exercises.
  `,
  courseContent: [
    {
      chapterTitle: "Getting Started with MySQL",
      chapterContent: [
        {
          lectureTitle: "Course Overview & Setup",
          lectureDuration: 15,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: true
        },
        {
          lectureTitle: "Basic SQL Syntax",
          lectureDuration: 45,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Intermediate Queries",
      chapterContent: [
        {
          lectureTitle: "JOINs, Subqueries & Grouping",
          lectureDuration: 60,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        },
        {
          lectureTitle: "Filtering & Sorting",
          lectureDuration: 30,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Advanced MySQL Features",
      chapterContent: [
        {
          lectureTitle: "Indexes & Performance Tuning",
          lectureDuration: 50,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        },
        {
          lectureTitle: "Stored Procedures & Views",
          lectureDuration: 55,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Projects & Real-World Use",
      chapterContent: [
        {
          lectureTitle: "Backup, Restore, Security",
          lectureDuration: 40,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        },
        {
          lectureTitle: "Hands-on Mini Project",
          lectureDuration: 50,
          lectureUrl: "https://www.youtube.com/watch?v=ER8oKX5myE0",
          isPreviewFree: false
        }
      ]
    }
  ]
},
{
  _id: "cpp_full_7h",
  courseTitle: "C++ Complete Course (7 Hours)",
  courseThumbnail: "https://img.youtube.com/vi/Y4s8CdQQaxk/maxresdefault.jpg",  
  coursePrice: 149,
  discount: 20,
  educator: { name: "GreatStack" },
  courseRatings: [{ userId: "user_01", rating: 1 }],
  enrolledStudents: ["user001", "user002", "user099", "user777"],
  courseDescription: `
    Comprehensive C++ course using the “Learn C++ in 7 Hours” video. 
    Covers basics through OOP, memory management, templates, 
    and more. Perfect for beginners who want strong fundamentals.
  `,
  courseContent: [
    {
      chapterTitle: "Introduction & Setup",
      chapterContent: [
        {
          lectureTitle: "Course Overview & Setup",
          lectureDuration: 20,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: true
        },
        {
          lectureTitle: "Syntax, Variables & Data Types",
          lectureDuration: 30,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Control Flow & Functions",
      chapterContent: [
        {
          lectureTitle: "If-Else, Loops, Switch",
          lectureDuration: 60,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        },
        {
          lectureTitle: "Functions, Recursion & Scope",
          lectureDuration: 50,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Object Oriented Programming",
      chapterContent: [
        {
          lectureTitle: "Classes & Objects",
          lectureDuration: 45,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        },
        {
          lectureTitle: "Inheritance & Polymorphism",
          lectureDuration: 40,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Memory Management & Advanced Topics",
      chapterContent: [
        {
          lectureTitle: "Pointers, References",
          lectureDuration: 55,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        },
        {
          lectureTitle: "Templates, STL & File I/O",
          lectureDuration: 55,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        }
      ]
    },
    {
      chapterTitle: "Project & Wrap Up",
      chapterContent: [
        {
          lectureTitle: "Mini Project & Best Practices",
          lectureDuration: 50,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        },
        {
          lectureTitle: "Course Review & Next Steps",
          lectureDuration: 45,
          lectureUrl: "https://www.youtube.com/watch?v=Y4s8CdQQaxk",
          isPreviewFree: false
        }
      ]
    }
  ]
}


  
  




];
