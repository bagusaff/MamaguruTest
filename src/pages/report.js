import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import ReportCard from "../components/cards/ReportCard";
import NavbarComponent from "../components/NavbarComponent";
import axios from "axios";

const Report = () => {
  //Local State
  const [reportData, setReportData] = useState([]);

  //Functions
  useEffect(() => {
    axios
      .get(
        "http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/reports/fetch_reports?kids_id=f54ead50-c1be-11eb-9be1-0242ac110002"
      )
      .then((res) => {
        setReportData(res.data.reports);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <NavbarComponent />
      <Wrapper>
        {reportData.map((data, index) => (
          <ReportCard key={index} data={data} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Report;

const Wrapper = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
`;
