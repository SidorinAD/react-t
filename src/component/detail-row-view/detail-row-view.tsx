import React from "react";
import "./detail-row-view.scss";

interface PersonAdress {
  streetAddress: string;
  city: string;
  state: string;
  zip: number;
}

interface PersonType {
  person: {
    firstName: string;
    lastName: string;
    description: string;
    address: PersonAdress;
  };
}

export function DetailRowView({ person }: PersonType | any) {
  if (!person) {
    return (
      <div className="detailrowview-disclaimer">
        {" "}
        Кликнув по строчке в таблице, Вы можете узнать более подробную
        информацию о пользователе{" "}
      </div>
    );
  }
  return (
    <div className="detailrowview-container">
      <p>
        Выбран пользователь <b>{person.firstName + " " + person.lastName}</b>
      </p>
      <p>
        Описание: <br />
        <textarea readOnly value={person.description} />
      </p>
      <p>
        Адрес проживания: <b>{person.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{person.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{person.address.state}</b>
      </p>
      <p>
        Индекс: <b>{person.address.zip}</b>
      </p>
    </div>
  );
}
