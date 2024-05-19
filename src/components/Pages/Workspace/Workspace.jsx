import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteWorkspace from "./DeleteWorkspace";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Workspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchWorkspaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://projectsyncifyapi.onrender.com/workspace/user/${user.user_id}/workspaces/`
        );
        setWorkspaces(response.data);
      } catch (err) {
        setError("Failed to fetch workspaces");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaces();
  }, [user.user_id]);

  const handleDeleteWorkspace = (workspaceId) => {
    setWorkspaces((prevWorkspaces) =>
      prevWorkspaces.filter((workspace) => workspace.id !== workspaceId)
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold my-3">Workspaces</h1>
      <div className="overflow-x-auto">
        <table className="table border-separate dark:bg-black">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Manager</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {workspaces.map((workspace) => (
              <tr key={workspace.id} className="bg-base-200">
                <th>{workspace.id}</th>
                <td>{workspace.name}</td>
                <td>{user.names}</td>
                <td>{user.email}</td>
                <th>
                  <Link to={`/editworkspace/${workspace.id}`}>
                    <FaRegEdit className="text-xl" />
                  </Link>
                </th>
                <th>
                  <DeleteWorkspace
                    workspaceId={workspace.id}
                    onDelete={handleDeleteWorkspace}
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workspace;
