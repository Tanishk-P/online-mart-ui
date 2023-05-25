import { Button, Carousel, Col, Divider, Input, Row, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import * as labelConst from '../utls/Labels';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import { getAdminSales } from '../services/ApiActions';
import { ISales } from '../models/ISales';

function AdminScreen() {

  const [salesData, setSalesData] = useState<ISales[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  interface GraphDataType {
    Sales: string,
    Date: string
  }

  useEffect(() => {
    getAdminSales(startDate, endDate).then(response => {
      if (Array.isArray(response?.data)) {
        setSalesData(response?.data);
      }
    });
  }, [startDate, endDate]);

  const salesGraph: GraphDataType[] = salesData.map(sale => ({
    Sales: sale.totalAmount,
    Date: sale.date
  }))


  return (
    <>
      <Header style={{ display: "flex", backgroundColor: "#f0f0f0", padding: "1rem", gap: "1rem", justifyContent: "center", alignItems: "center" }} >
        <Typography.Text>Start Date:</Typography.Text>
        <Input value={startDate} style={{ width: "8rem" }} type='date' onChange={(e) => setStartDate(e.target.value)} />
        <Divider type='vertical' style={{ height: "1.5rem" }} />
        <Typography.Text>End Date:</Typography.Text>
        <Input value={endDate} style={{ width: "8rem" }} type='date' onChange={(e) => setEndDate(e.target.value)} />
      </Header>
      <Content className='admin-screen-content' style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "5rem 8rem" }}>
        <LineChart width={1080} height={300} data={salesGraph}
          margin={{ top: 5, right: 10, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="6" />
          <XAxis strokeWidth={"2"} dataKey="Date" />
          <YAxis strokeWidth={"2"} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" strokeWidth={"1"} stroke="red" />
        </LineChart>
      </Content>
    </>
  )
}

export default AdminScreen;