import React, { useMemo, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const formatDate = (iso) => {
  if (!iso) return '-'
  try { return new Date(iso).toLocaleDateString() } catch { return '-' }
}

// Simple random name helper
const NAMES = [
  'Aarav Sharma','Isha Gupta','Vihaan Mehta','Ananya Verma','Arjun Singh',
  'Myra Patel','Kabir Nair','Sara Kapoor','Reyansh Joshi','Aadhya Rao',
  'Devansh Bansal','Kiara Desai','Ishaan Chawla','Saanvi Khanna','Advait Shah',
  'Navya Malhotra','Aarohi Sinha','Vivaan Kulkarni','Pari Yadav','Atharv Jain',
  'Riddhi Agarwal','Krish Mishra','Trisha Anand','Rohan Saxena','Tanya Arora',
  'Yuvraj Bhatt','Meera Iyer','Kartik Menon','Nitya Das','Ayaan Dutta',
  'Prisha Roy','Dhruv Kaushik','Amaira Gill','Arnav Mathur','Anika Kohli',
]

const pickRandom = () => NAMES[Math.floor(Math.random() * NAMES.length)]

const StudentsEnrolled = () => {
  // FRONTEND-ONLY SOURCE (clone + randomize names once)
  const [rows] = useState(() => {
    const base = [...dummyStudentEnrolled].reverse()
    return base.map((r) => ({
      ...r,
      student: {
        ...r.student,
        name: pickRandom(),
      },
    }))
  })

  // UI controls
  const [q, setQ] = useState('')
  const [sortBy, setSortBy] = useState('date_desc') // date_desc | date_asc | name_asc | name_desc | course_asc | course_desc

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    const base = term
      ? rows.filter((r) => {
          const name = r?.student?.name?.toLowerCase() || ''
          const course = r?.courseTitle?.toLowerCase() || ''
          return name.includes(term) || course.includes(term)
        })
      : rows

    const sorted = [...base].sort((a, b) => {
      const an = a?.student?.name || ''
      const bn = b?.student?.name || ''
      const ac = a?.courseTitle || ''
      const bc = b?.courseTitle || ''
      const ad = new Date(a?.purchaseDate || 0).getTime()
      const bd = new Date(b?.purchaseDate || 0).getTime()

      switch (sortBy) {
        case 'name_asc': return an.localeCompare(bn)
        case 'name_desc': return bn.localeCompare(an)
        case 'course_asc': return ac.localeCompare(bc)
        case 'course_desc': return bc.localeCompare(ac)
        case 'date_asc': return ad - bd
        case 'date_desc':
        default: return bd - ad
      }
    })

    return sorted
  }, [rows, q, sortBy])

  if (!rows) return <Loading />

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col gap-4 md:p-8 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <h2 className="text-lg font-semibold">Students Enrolled</h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or course…"
            className="border rounded px-3 py-2 text-sm w-full sm:w-72"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="date_desc">Newest first</option>
            <option value="date_asc">Oldest first</option>
            <option value="name_asc">Name A → Z</option>
            <option value="name_desc">Name Z → A</option>
            <option value="course_asc">Course A → Z</option>
            <option value="course_desc">Course Z → A</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-200">
        <table className="w-full table-fixed md:table-auto">
          <thead className="text-gray-900 border-b border-gray-200 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3 font-semibold">Student Name</th>
              <th className="px-4 py-3 font-semibold">Course Title</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">Date</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {filtered.map((item, index) => (
              <tr key={`${item?.student?._id || 'id'}_${index}`} className="border-b border-gray-200">
                <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>

                <td className="md:px-4 px-2 py-3 flex items-center gap-3 min-w-0">
                  <img
                    src={item?.student?.imageUrl}
                    alt={item?.student?.name || 'avatar'}
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <span className="truncate">{item?.student?.name || '-'}</span>
                </td>

                <td className="px-4 py-3 truncate">{item?.courseTitle || '-'}</td>

                <td className="px-4 py-3 hidden sm:table-cell">
                  {formatDate(item?.purchaseDate)}
                </td>
              </tr>
            ))}

            {!filtered.length && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  No enrollments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentsEnrolled
