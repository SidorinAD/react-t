import React, { useState } from "react";
import "./data-size-selector.css";

import Loader from "../loader/loader";

import useFetch from "../../utils/hooks/useFetch";

import {
  LOW_USERS_COUNT_URL,
  HIGH_USERS_COUNT_URL,
} from "../../utils/const/links";

import MainTable from "../main-table/main-table";

export const DataSizeSelector: React.FC = () => {
  const [url, setUrl] = useState<string | undefined>();

  const fetchedUrl = url;

  const { status, data, error } = useFetch(fetchedUrl);

  return (
    <div className="selector-container">
      {(() => {
        switch (status) {
          case "idle":
            return (
              <>
                <h1>Выберите количество загружаемых пользователей</h1>
                <button
                  className="btn green"
                  onClick={() => setUrl(LOW_USERS_COUNT_URL)}
                >
                  32 пользователя
                </button>
                <button
                  className="btn red"
                  onClick={() => setUrl(HIGH_USERS_COUNT_URL)}
                >
                  1000 пользователей
                </button>
              </>
            );
          case "fetching":
            return <Loader></Loader>;
          case "fetched":
            return <MainTable data={data}></MainTable>;
          case "error":
            return <div>{error}</div>;
          default:
            return null;
        }
      })()}
    </div>
  );
};
