import Link from 'next/link'

export default function Orderhighlight({productname, stock, price}) {

    const handleCancel = (e) => {
        alert("Are you sure ?")
    }

  return (
    <div className='flex items-center justify-around mb-5 w-10/12 mx-auto'>
        <Link href={"/detailhistoryorder"}><div className='flex w-10/12 justify-between bg-[#9ACD32] p-2 rounded-xl text-white cursor-pointer'>
            <p>{productname}</p>
            <p>{stock}</p>
            <p>IDR {price}</p>
        </div></Link>
        <span onClick={(e) => handleCancel(e)} className='mr-5 text-2xl text-[#e74c3c] cursor-pointer'>X</span>
    </div>
  )
}