interface Props {
  title: string[];
  content: string[][];
}

const TableComponent = ({ title, content }: Props) => {
  return (
    <div>
      {title && content && (
        <table className="border-2">
          <thead>
            <tr>
              {title.map((item, key) => {
                return <th key={key}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {content.map((item, key) => {
              return (
                <tr key={key}>
                  {item.map((item2, key) => {
                    return <td key={key}>{item2}</td>;
                  })}
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
