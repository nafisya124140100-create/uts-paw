import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items } = useKoleksi()
  const perStatus = items.reduce((hitung, { status }) => ({ ...hitung, [status]: (hitung[status] ?? 0) + 1 }), {})

  return (
    <section className= "tabel">
      <h1>Statistik</h1>
      <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Status</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(perStatus).map(([status, jumlah]) => (
              <tr key={status}>
                <td>{status}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}