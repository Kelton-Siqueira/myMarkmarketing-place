/* eslint-disable @next/next/no-img-element */
'use client'
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { 
    Dialog, 
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { useDropzone } from 'react-dropzone'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

interface FilePreview {
    file: Blob,
    preview: string
}

export default function ImageUploadPlaceHolder() {
  const [fileToProcess, seFileToProcess] = useState<{
    path:string
} | null>()
const [restoredfile, setRestoredFile] = useState<FilePreview | null>()
  const [isMounted, setIsMonted] = useState(false)
    const [file, setFile] = useState<FilePreview | null>()
    const route = useRouter()


    //Com essa função fazemos o uploude da imagem para dentro do banco de dados, assim que ela é arrastada para o local indicado
    const onDrop = useCallback( async (acceptFiles:File[]) => {
      try{
          const file = acceptFiles[0]
          setFile({
              file, preview: URL.createObjectURL(file) //com createObjecturl se cria urls do arquivo temporariamente
          })
          const supabase = createClientComponentClient()
          
            const { data, error } = await supabase.storage.from(process.env.NEXT_PUBLIC_SUPABESE_APP_BUCKET_IMAGE_FOLDER).upload(`${process.env.NEXT_PUBLIC_SUPABESE_APP_BUCKET_IMAGE_FOLDER_PROCESSING}/${acceptFiles[0].name}`, acceptFiles[0])
            console.log(data, 'data')
            if(!error){
              console.log('fileToProcess', fileToProcess)
              seFileToProcess(data)
            }
            route.reload()
      }catch(error){
          console.log('onDrop', error)
      }

  },[fileToProcess, route]) 
    const handleEnhance = async () => {
      try{
        const supabase = createClientComponentClient()
        const { data: { publicUrl }} = await supabase.storage.from(process.env.NEXT_PUBLIC_SUPABESE_APP_BUCKET_IMAGE_FOLDER).getPublicUrl(`${fileToProcess?.path}`)
        console.log(publicUrl, 'url')
        
        


      }catch(error){
        console.log('handleEnhancez', error)
      }
    }

    const handleDialog = async (e:boolean) => {
    }

    
    //Passando uma função como retorno, fazemos o comportamento usamont, ou seja quando a aplicação dor desmontada, iremos remover a urltemporaria pára não haver consumo exessimo de memoria 
    useEffect(() => {
      setIsMonted(true)
        return () => {
            if(file){ 
                return URL.revokeObjectURL(file.preview)}
                if(restoredfile){ 
                    return URL.revokeObjectURL(restoredfile.preview)}
        }
    }, [file, restoredfile])
    const { getInputProps, getRootProps, isDragAccept } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
              "image/png": [".png"],
              "image/jpg": [".jpg"],
        }
    })
    if(!isMounted) return null
  return (
    <div className="flex h-[200px] w-full shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 text-muted-foreground"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="11" r="1" />
          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
          <path d="M17 18.5a9 9 0 1 0-10 0" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">Just add Photos</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          The photo you add will be enhanced by IA
        </p>
        <Dialog onOpenChange={handleDialog}>
          <DialogTrigger>
            <Button size="sm" className="relative">
              Bring your past to life
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Photos</DialogTitle>
              <DialogDescription>
                Drag a photo in order to Upload & Enhance.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                {
                    !file && (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragAccept ? (
                                    <p className="flex items-center justify-center bg-blue-50 opacity-70 border border-dashed border-blue-500 p-6 h-36 rounded-lg ">Drop your Photo Her</p>
                                ) : (
                                    <p className="flex items-center justify-center bg-blue-50 opacity-70 border border-dashed border-blue-500 p-6 h-36 rounded-lg ">Click to choose image</p>
                                )}
                        </div>
                    )}
                    <div className="flex flex-col justify-evenly items-center sm:flex-row gap-2">
                        {
                            file && (
                                 <div className="flex w-48 h-48 relative">
                                    
                                    <img
                                        src={file.preview} className="w-48 h-48 object-contain rounded-lg"  alt="text" onLoad={() => URL.revokeObjectURL(file.preview)}/>
                                </div>
                             )
                        }
                    </div>
                    <div className="flex flex-col justify-evenly items-center sm:flex-row gap-2">
                        {
                            restoredfile && (
                                 <div className="flex w-60 h-60 relative">
                                    
                                    <img
                                        src={restoredfile.preview} className="w-60 h-60 object-contain rounded-lg"  alt="text" onLoad={() => URL.revokeObjectURL(restoredfile.preview)}/>
                                </div>
                             )
                        }
                    </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleEnhance}>Enhance</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}