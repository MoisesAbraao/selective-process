import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { ConfigProvider, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ApplymentsContainer, ApplyButton, ButtonContainer } from './styles'
import HeaderMenu from '../../components/HeaderMenu'
import DeleteModal from '../../components/DeleteModal'
import { DeleteOutlined } from '@ant-design/icons'

const Applyments = () => {
  const navigate = useNavigate()
  const [processes, setProcesses] = useState([])
  const [openModalDeleteValidation, setOpenModalDeleteValidation] = useState(false)
  const [applymentID, setApplymentID] = useState()

  const fetchData = async () => {
    try {
      const { data } = await api.get(`/applyments`);
      setProcesses(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDeleteAppyment = async(id) => {
    await api?.delete(`/applyments/${id}`).then(response => {
      fetchData()
      setOpenModalDeleteValidation(false)
    })
  } 

  const columns = [
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      render: (text) => <a href={text}>{text}</a>
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      render: (text) => <DeleteOutlined onClick={() => { 
        setOpenModalDeleteValidation(true)
        setApplymentID(text)
      }} />
    },
  ]

  return (
    <>
    <HeaderMenu />
    <ApplymentsContainer>
      <ButtonContainer>
        <ApplyButton type="primary" size={'large'} onClick={() => navigate('/applyments/new')}>
          <span>
            +New Apply
          </span>
        </ApplyButton>
      </ButtonContainer>
        <ConfigProvider
          theme={{
            token: {
              colorText: '#FFFFFF',
              colorBgContainer: '#2c2c2c',
              colorPrimary: '#00b96b'
            },
            components: {
              Table: {
                headerBg: '#1e1e26',
                headerColor: '#FFFFFF',
                headerSplitColor: 'None',
                borderColor: 'None'
              },
            },
          }}
        >
          <Table 
            dataSource={processes} 
            columns={columns} 
            size={'middle'}
          />
        </ConfigProvider>
      </ApplymentsContainer>
      <DeleteModal
        openModalDeleteValidation={openModalDeleteValidation}
        handleDeleteAppyment={() => handleDeleteAppyment(applymentID)}
        closeModalDeleteValidation={() => setOpenModalDeleteValidation(false)} 
      />
    </>
  )
}

export default Applyments