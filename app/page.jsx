"use client"

import Input from "@components/Input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {

  const [url, setUrl] = useState("")
  const router = useRouter()

  const pegarURL = async (e) => {

    console.log(`A URL É ${url}`)
    e.preventDefault() // O handlesubmit funciona como o DOM para pegar valores de inputs
    window.location.href = (`https://video-downloader-jzgb.onrender.com/ytdownload?url=${url}`)

  }

  return (
    <div>
      <section className="w-full flex-center flex-col mt-16">
        <h1 className="head_text text-center">
          Baixe Videos Gratuitamente
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            Livre de Anúncios e Propagandas
          </span>
        </h1>
        <p className="desc text-center">
          O YTDownloader fornece uma maneira de baixar vídeos do Youtube de uma maneira fácil e gratuita, By. Vitor :D.
        </p>
        <Input setUrl={setUrl} handleSubmit={pegarURL} />

      </section>
    </div>
  )
}
