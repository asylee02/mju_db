import EditButton from "./EditButton";

interface Props {
  title: string[];
  content: string[][];
  IseditButton?: boolean;
}

const TableComponent = ({ title, content, IseditButton }: Props) => {
  return (
    <div>
      {title && content && (
        <table className="border-2">
          <thead className="border-2 border-black">
            <tr className="border-2 ">
              {title.map((item, key) => {
                return (
                  <th className="border-2 px-2" key={key}>
                    {item}
                  </th>
                );
              })}
              {IseditButton && <th>수정</th>}
            </tr>
          </thead>
          <tbody>
            {content.map((item, key) => {
              return (
                <tr key={key} className="border-2">
                  {item.map((item2, key) => {
                    return (
                      <td className="border-2 text-center px-2" key={key}>
                        {item2}
                      </td>
                    );
                  })}
                  {IseditButton && (
                    <td>
                      {/* 1-C */}
                      <EditButton id={Number(item[0])} />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
