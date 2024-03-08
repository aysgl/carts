import Button from "../Button"

const Header = () => {
  return (
    <div className='py-2'>
    <div className='flex justify-between'>
      <h1 className="font-light text-3xl">Cars</h1>
      <Button title="Kaydol"/>
    </div>
    </div>
  )
}

export default Header