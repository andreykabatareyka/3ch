export default () => {
  return (
    <div className="flex flex-col">
      <label className="leading-loose">Post text</label>
      <textarea
        // value={}
        // onChange={}
        className="px-4 py-2 w-full text-gray-600 border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-500 sm:text-sm"
        placeholder="Add post text"
      />
    </div>
  )
}
