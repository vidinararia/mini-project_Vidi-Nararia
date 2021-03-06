import React, { useEffect } from "react";
import ProjectCardComponent from "./ProjectCardComponent";
import { GET_PROJECT } from "../../graphQL/Query";
import { useQuery } from "@apollo/client";
import Loadingsvg from "../../assests/Loadingsvg";

function ProjectComponent() {
  const { data, loading, refetch } = useQuery(GET_PROJECT);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="container mt-2">
      <h3>
        <strong>Project</strong>
      </h3>
      {loading ? (
        <div className="position-absolute top-50 start-50 translate-middle">
          <Loadingsvg />
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {data.project.map((item) => (
            <ProjectCardComponent key={item.id} project={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectComponent;
