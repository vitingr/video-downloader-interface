import React from 'react'

const Input = ({setUrl, handleSubmit}) => {
    
    return (
        <div className='w-full max-w-full flex-center flex-col'>
            <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>

                    </span>
                    <input type="text" onChange={(e) => setUrl(e.target.value)} placeholder='URL do Vídeo' className='form_input' required />
                </label>
                <button type='submit' className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                    Baixar Vídeo
                </button>
            </form>
        </div>
    )
}

export default Input