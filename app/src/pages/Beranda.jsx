import mahasiswa from '../../mahasiswa.json'
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

    return (
        <section className="beranda">
            <div className="header-row">
                <h1>WebBook |</h1>
                <span className="sub-title">{mahasiswa.tema}</span>
            </div>

         {loading ? (
        <p>Memuat ringkasan...</p>
        ) : (
            <p>
            Ada {items.length} buku yang kamu punya dalam {jumlahKategori} kategori.
            </p>
        )}
        <Link to="/koleksi" className="btn-kotak">Lihat semua daftar buku</Link>
        </section >
    )
}