import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import moment from 'moment';

const columns = [
  {
    field: 'first_name',
    headerName: 'Nome',
    width: 300,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Sobrenome',
    width: 300,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
    editable: true,
  },
  {
    field: 'login_date',
    headerName: 'Registros de Login',
    type: 'date',
    width: 300,
    valueFormatter: params =>
    moment.utc(params?.value, "YYYY-MM-DD h:m:s a").format("DD/MM/YYYY H:mm:ss"),
  },
];


export default function DataTable() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        api.get('api/users/get').then(res => {
            if (!res) {
                alert('Erro ao buscar usuários')
                return;
            }
            setUsers(res.data)
        })
      }, []);

      async function onFilterChange() {

      }
  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={20}
        disableSelectionOnClick={false}
      />
    </div>
  );
}
