import React from "react";
import Button from "@components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default () => (
  <div>
    <div className="grid h-screen grid-cols-1 grid-rows-3 lg:grid-cols-11 lg:grid-rows-1">
      <div className="row-span-2 h-full w-full bg-gray-700 lg:col-span-6">
        <div>
          <div className="h-5 w-5 bg-blue-400"></div>
          <span>지금 일어나고 있는 일</span>
          <span>오늘 트위터에 가입하세요.</span>
          <FontAwesomeIcon icon={faPlus} />

          <button></button>
        </div>
        <span></span>
      </div>
      <div className="row-span-1 h-full w-full bg-orange-300 lg:col-span-5"></div>
    </div>
  </div>
);
