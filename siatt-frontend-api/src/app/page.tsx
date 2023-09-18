import Image from 'next/image'
import UploadaerXlsx from '../../components/uploader_xlsx'

export default function Home() {
  return (
    <main >
      <div >
        <UploadaerXlsx rota = "/teste" />
      </div>
    </main>
  )
}
