function Table({ children }) {
  return (
    <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
      {children}
    </table>
  );
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
