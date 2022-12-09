import React from 'react'

const FileAddModal = ({visible,onClose}) => {
    if(!visible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
        <div className='bg-white p-4 rounded'>
            <h3>서식추가</h3>
            <p>폴더에서 파일을 선택하여 추가하세요.</p>

            <div className='flex justify-around mt-4'>
                <button type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 
                    px-4 py-2 text-sm  leading-4 text-white shadow-sm hover:bg-indigo-700 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}>등 록</button>
                <button type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 
                    px-4 py-2 text-sm leading-4 text-white shadow-sm hover:bg-indigo-700 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}>나가기</button>
            </div>
        </div>
    </div>
  )
}

export default FileAddModal