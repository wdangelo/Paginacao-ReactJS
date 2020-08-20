import React, {useState, useEffect} from 'react';

import api from '../../sercices/api'

import { Container, PTable, Pagination, PaginationButton, PaginationItem } from './styles'

function Table() {
    const [user, setUser] = useState([])
    const [limit, setLimit] = useState(5)
    const [pages, setPages] = useState([])
    const [currentPage, SetCurrentPage] = useState(1)

    const total = 10
  
   
    useEffect(() => {
        async function loadUsers() {
            
            const res = await api.get('/users')
            const totalPages = Math.ceil(total / limit)
            const arrayPages = []
            for(let i = 1; i <= totalPages; i++){
                arrayPages.push(i)
            }
            setPages(arrayPages)
            setUser(res.data)
        }
        loadUsers()
    }, [])

  return (
      <Container>
          <h3>Tabela de usuarios</h3>
          <PTable>
              <thead>
                  <tr>
                      <th># </th>
                      <th>#nome </th>
                      <th>E-mail </th>
                      <th># Setor </th>
                  </tr>
              </thead>
              <tbody>
                {user.map((users) => (
                    <tr key={users.id}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.setor}</td>
                    </tr>

                ))}
              </tbody>
          </PTable>
          <Pagination>
                <div>Quantidade {total} </div>
                <PaginationButton>
                    <PaginationItem>Previous</PaginationItem>
                        {pages.map(page => (
                            <PaginationItem key={page} onClick={() => SetCurrentPage(page)}>{page}</PaginationItem>
                        ))}
                    <PaginationItem>Next</PaginationItem>
                </PaginationButton>
          </Pagination>
      </Container>
  )
}

export default Table;