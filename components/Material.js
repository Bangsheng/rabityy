import React from 'react';
import { Header, List } from 'semantic-ui-react';

function Material() {
  return (
    <div className="contentContainer">
      <Header as="h2">Useful WebSites/有用的网站</Header>
      <List as="ol">
        <List.Item as="li">
          Official
          <List.List as="ol">
            <List.Item as="li">
              U.S. Department of Health and Human Services (
              <a href="http://www.hhs.gov/">
                http://www.hhs.gov/
              </a>)
            </List.Item>
            <List.Item as="li">
              National Cancer Institute (
              <a href="https://www.cancer.gov/">
                https://www.cancer.gov/
              </a>)
            </List.Item>
            <List.Item as="li">
              Clinical Trials in the United States (
              <a href="ClinicalTrials.Gov">
                ClinicalTrials.Gov
              </a>)
            </List.Item>
          </List.List>
        </List.Item>
        <List.Item as="li">
          Molecular Match (
          <a href="https://www.molecularmatch.com/">
            https://www.molecularmatch.com/
          </a>): latest treatments and clinical trials for specific type of cancer
        </List.Item>
      </List>

      <List as="ol">
        <List.Item as="li">
          官方网站
          <List.List as="ol">
            <List.Item as="li">
              美国卫生及公共服务部 (
              <a href="http://www.hhs.gov/">
                http://www.hhs.gov/
              </a>)
            </List.Item>
            <List.Item as="li">
              美国国立癌症中心 (
              <a href="https://www.cancer.gov/">
                https://www.cancer.gov/
              </a>)
            </List.Item>
            <List.Item as="li">
              美国国立健康中心临床试验查询 （
              <a href="ClinicalTrials.Gov">
                ClinicalTrials.Gov
              </a>）
            </List.Item>
          </List.List>
        </List.Item>
        <List.Item as="li">
          分子匹配 (
          <a href="https://www.molecularmatch.com/">
            https://www.molecularmatch.com/
          </a>): 快速搜索每类癌症最新治疗方案及临床试验
        </List.Item>
        <List.Item as="li">
          中文网站（
          <a href="http://www.chinadrugtrials.org.cn/eap/main">
            http://www.chinadrugtrials.org.cn/eap/main
          </a>)：药物临床试验登记与信息公示平台
        </List.Item>
      </List>
    </div>
  );
}

export default Material;
