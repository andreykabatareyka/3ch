import {
  FirstNameInput,
  FormHeader,
  LastNameInput,
  PostButton,
  PostTextInput,
  ProfileImageURLInput,
} from '.'

export default () => {
  return (
    <div className="relative sm:mx-auto sm:max-w-xl px-4 mx-auto max-w-md py-10 bg-white rounded-3xl shadow sm:p-10 md:mx-0">
      <FormHeader />
      <div className="divide-gray-200 divide-y py-8 text-gray-700 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
        <FirstNameInput />
        <LastNameInput />
        <PostTextInput />
        <ProfileImageURLInput />
      </div>
      <div className="flex items-center pt-4 space-x-4">
        <PostButton />
      </div>
    </div>
  )
}
