import React from "react";

function UserProfile() {
  return (
    <div className="h-[80vh] items-center flex justify-center px-5 pt-0 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Welcome to Your Profile
              </h1>
              <p className="text-[12px] text-gray-500">
                This is your profile page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;