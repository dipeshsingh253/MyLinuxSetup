import React from "react";

const Category = (props) => {
  const { id, name } = props;

  const edit = () => {
    console.log("hey there");
  };

  return (
    <tr key={id}>
      <td className=" text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{id}</div>
      </td>
      <td className=" text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{name}</div>
      </td>
      <td
        onClick={edit}
        className=" text-right px-6 py-4 whitespace-nowrap font-medium text-sm"
      >
        <a className="text-indigo-600 hover:text-indigo-800 px-4 cursor-pointer">
          Edit
        </a>
        <a className="text-red-600 hover:text-red-800 px-4 cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Category;
