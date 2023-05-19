import { Col, Divider, Row, Table, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState, useEffect } from "react";
import * as labelConst from "../utls/Labels";
import { ColumnsType } from "antd/es/table";
import { useDispatch } from "react-redux";
import { OrderDetails } from "../store/OrderDetailsState/OrderDetailsActions";
import { IOrderDetailsState } from "../store/OrderDetailsState/OrderDetailsState";
import { useSelector } from "react-redux";
import { IAppState } from "../store/state";
import { compareDates } from "../utls/Helper";

function OrderScreen() {
  const dispatch: any = useDispatch();
  const [sortedData, setSortedData] = useState<DataType[]>([]);
  const orders: IOrderDetailsState = useSelector(
    (state: IAppState) => state.orderDetailsState
  );

  useEffect(() => {
    dispatch(OrderDetails());
  }, [dispatch]);

  interface DataType {
    key: string;
    customerName: string;
    product: string;
    quantity: number;
    totalPrice: number;
    purchaseDate: string;
    userId?: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Purchase date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
      // sorter: (a, b) => compareDates(a.purchaseDate, b.purchaseDate),
    },
    {
      title: "Product Name",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total Amount",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => `₹ ${text}`,
    },
  ];

  const data: DataType[] = orders.orderDetails.map((order) => {
    return {
      customerName: order.name,
      key: order.productId,
      product: order.productName,
      quantity: order.quantity,
      totalPrice: order.totalAmount,
      purchaseDate: order.createdAt,
    };
  });

  useEffect(() => {
    const sorted = [...data].sort((a, b) =>
      compareDates(a.purchaseDate, b.purchaseDate)
    );
    setSortedData(sorted);
  }, [data]);

  return (
    <>
      <Content
        style={{
          backgroundColor: "#f0f0f0",
          height: "90vh",
          padding: "3.5rem",
        }}
      >
        <Table
          bordered
          dataSource={sortedData}
          columns={columns}
          scroll={{ y: "50vh" }}
        />
      </Content>
    </>
  );
}

export default OrderScreen;
