import React from "react";
import { deleteRoom } from "@/lib/action";
import { IoTrashOutline, IoPencil } from "react-icons/io5";

import Link from "next/link";

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      className="rounded-sm p-1 hover:bg-gra-200"
      href={`/admin/room/edit/${id}`}
    >
      <IoPencil className="size-5" />
    </Link>
  );
};

export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, image);
  return (
    <form action={DeleteRoomWithId}>
      <button
        type="submit"
        className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer"
      >
        <IoTrashOutline className="size-5" />
      </button>
    </form>
  );
};
