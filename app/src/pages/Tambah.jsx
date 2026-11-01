import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Novel', tahunTerbit: '', penulis: '', status: 'sudah dibaca' }

export default function Tambah() {
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')
  const { tambah } = useKoleksi()
  const navigate = useNavigate()

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah buku</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="penulis">Penulis</label>
      <input id="penulis" name="penulis" value={form.penulis} onChange={ubah} />

      <label htmlFor="status">Status</label>
      <select id="status" name="status" value={form.status} onChange={ubah}>
        <option value="sudah dibaca">sudah dibaca</option>
        <option value="belum dibaca">belum dibaca</option>
        <option value="sedang dibaca">sedang dibaca</option>
        <option value="ingin dibeli">ingin dibeli</option>
      </select>

      <label htmlFor="tahunTerbit">Tahun Terbit</label>
      <input id="tahunTerbit" name="tahunTerbit" type="number" value={form.tahunTerbit} onChange={ubah}/>

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option value="Novel">Novel</option>
        <option value="Komik">Komik</option>
        <option value="Biografi">Biografi</option>
        <option value="Self-Improvement">Self-Improvement</option>
        <option value="Religi">Religi</option>
        <option value="Puisi">Puisi</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}