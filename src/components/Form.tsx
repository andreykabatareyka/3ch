export default () => {
  const blank = 'blank'

  return (
    <div className="flex flex-col justify-center py-6 min-w-max min-h-screen bg-gray-100 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="relative mx-8 px-4 py-10 bg-white rounded-3xl shadow sm:p-10 md:mx-0">
          <div className="mx-auto max-w-md">
            <div className="flex items-center space-x-5">
              <div className="flex flex-shrink-0 items-center justify-center w-14 h-14">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaOB8rsBDV-P--u-ykDCOmyS3FRceSVhJGQ&usqp=CAU"
                  alt="adminka"
                />
              </div>
              <div className="block self-start pl-2 text-gray-700 text-xl font-semibold">
                <h2 className="leading-relaxed">{blank}</h2>
                <p className="text-gray-500 text-sm font-normal leading-relaxed">
                  {blank}
                </p>
              </div>
            </div>
            <div className="divide-gray-200 divide-y">
              <div className="py-8 text-gray-700 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Наименование</label>
                  <input
                    // value={}
                    // onChange={}
                    type="text"
                    className="px-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
                    placeholder="Добавить наименование пиццы"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Описание</label>
                  <input
                    // value={}
                    // onChange={}
                    type="text"
                    className="px-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
                    placeholder="Добавить описание пиццы"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">30 см</label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <input
                        // value={}
                        // onChange={}
                        type="text"
                        className="pl-8 pr-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
                        placeholder="659"
                      />
                      <div className="absolute left-3 top-1">₽</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">35 см</label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <input
                        // value={}
                        // onChange={}
                        type="text"
                        className="pl-8 pr-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
                        placeholder="799"
                      />
                      <div className="absolute left-3 top-1">₽</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">40 см</label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <input
                        // value={}
                        // onChange={}
                        type="text"
                        className="pl-8 pr-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
                        placeholder="999"
                      />
                      <div className="absolute left-3 top-1">₽</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">URL изображения</label>
                  <input
                    // value={}
                    // onChange={}
                    type="text"
                    className="px-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
                    placeholder="Добавить URL изображения пиццы"
                  />
                </div>
              </div>
              <div className="flex items-center pt-4 space-x-4">
                <button
                  // onClick={() =>{}}
                  className="flex items-center justify-center px-4 py-3 w-full text-white bg-blue-500 rounded-md focus:outline-none"
                >
                  {blank}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
