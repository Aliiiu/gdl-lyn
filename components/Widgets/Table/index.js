import React from "react";
import styled from "styled-components";
import clsx from "clsx";

const TableOverviewContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;

  .update_container {
    display: flex;
    justify-content: center;
    width: 100%;
    .data_update {
      font-size: 20px;
      font-weight: 500;
    }
  }

  table {
    width: 100%;
    text-align: left;
    font-size: 15px;
    border-collapse: collapse;

    .align--right {
      text-align: right;
    }

    thead {
      tr {
        background-color: ;

        th {
          font-weight: 600;
          line-height: 19px;
          color: "";
          font-size: 18px;
          padding: 10px;
          white-space: nowrap;

          &:first-child {
            padding-left: 20px;
          }

          &:last-child {
            padding-right: 20px;
          }
        }
      }
    }

    tbody {
      td {
        white-space: normal;
        height: 30px;
      }
    }
  }

  /* media-queries */
  @media (max-width: 450px) {
    table tbody td:last-child {
      padding-right: 15px;
    }

    table thead tr th:first-child,
    table tbody td:first-child {
      padding-left: 15px;
    }
  }
`;

export const Table = ({
  headers,
  rows,
  showHead = true,
  onRowClick = () => null,
  allowRowClick = true,
  ...rest
}) => {
  return (
    <TableOverviewContainer {...rest}>
      <table>
        {showHead && (
          <thead className="bg-red-500 text-white">
            <tr>
              {headers?.map(header => {
                return (
                  <th key={header.title} className="text-center">
                    {header.title}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody className="bg-red-100">
          {rows.map(row => (
            <tr
              key={row._id}
              onClick={allowRowClick ? () => onRowClick(row._id) : undefined}
              className={clsx({ clickable: allowRowClick })}
            >
              {headers?.map(header => {
                return (
                  <td key={header.title} className="text-center">
                    {header && header?.render?.(row)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableOverviewContainer>
  );
};
export default Table;
