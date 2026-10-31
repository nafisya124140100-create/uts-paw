import mahasiswa from '../../mahasiswa.json'
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

    return (
        <section>
        <h1>WebBook</h1>
        <p>{mahasiswa.tema}</p>
         {loading ? (
        <p>Memuat ringkasan...</p>
        ) : (
            <p>
            Ada {items.length} buku yang kamu punya dalam {jumlahKategori} kategori.
            </p>
        )}
        <Link to="/koleksi">Lihat semua daftar buku</Link>
        </section>
    )
}