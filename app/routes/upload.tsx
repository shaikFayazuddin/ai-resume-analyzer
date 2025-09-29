import React, { type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import { useState } from 'react'
import FileUploader from '~/components/FileUploader'

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusText, setStatusText] = useState('')
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
        setFile(file)
    }

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    console.log(file, "burt")
    e.preventDefault()
  }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section py-16">
        <div className='page-heading'>
          <h1>Smart feedback for your dream job.</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
            <img src="/images/resume-scan.gif" alt="scanning" className='w-full'/>
            </>
          ) :(
            <>
              <h2>Drop your resume for ATS score and resume tips.</h2>
            </>
          ) }
        </div>
        {!isProcessing && (
          <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
            <div className='form-div'>
              <label htmlFor="company-name">Company Name</label>
              <input type="text" name='company-name' placeholder='Company Name' id='company-name' />
            </div>

            <div className='form-div'>
              <label htmlFor="job-title">Job Title</label>
              <input type="text" name='job-title' placeholder='Job Title' id='job-title' />
            </div>

            <div className='form-div'>
              <label htmlFor="job-description">Job Description</label>
              <textarea rows={5} name='job-description' placeholder='Job Description' id='job-description' />
            </div>

            <div className='form-div'>
              <label htmlFor="uploader">Upload</label>
              <FileUploader onFileSelect={handleFileSelect}></FileUploader>
            </div>

            <button className='primary-button' type='submit'>Analyze Resume</button>
          </form>
          
        )}
      </section>
    </main>
  )
}

export default upload