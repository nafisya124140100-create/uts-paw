import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuItem from '../components/KartuItem.jsx'
import './Koleksi.css'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [status, setStatus] = useState('Semua')

  if (loading) return <p>Memuat daftar buku...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarStatus = ['Semua', ...new Set(items.map((item) => item.status))]
  const tampil = items.filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (status === 'Semua' || item.status === status),
  )

  return (
    <section className= "koleksi">
      <h1>Koleksi</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
          {daftarStatus.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}