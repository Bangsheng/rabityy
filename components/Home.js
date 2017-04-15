import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

function Home() {
  return (
    <div className="contentContainer">
      <Grid stackable>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h2">Our Mission/我们的目标</Header>
            <p>
              Help minimize healthcare information imbalance and assist foreign patients’ decision making through
              translation and educational material.<br /><br />
              我们希望通过为国内的病患提供免费病例翻译，临床试验新药以及其他相关信息查询，使病人能够消除语言障碍，
              更快了解某种疾病在国外的治疗情况，为是否选择海外就医提供参考。
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h2">Disclaimer/声明</Header>
            <p>
              BKG Helper.com will not provide clinical consultation and diagnosis.<br /><br />
              由于团队成员的背景都是生物医学研究人员，并未涉及临床诊断，所以BKG Helper网站不提供疾病诊断建议。
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h2">Translation/翻译</Header>
            <p>
              submit your medical records for translation by graduate students and postdocs with biomedicine background
              <br /><br />
              由美国生物医学博士及博士后为病人病历提供科学准确的翻译
            </p>
          </Grid.Column>
          <Grid.Column>
            Image 1
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h2">Educational material/补充资料</Header>
            <p>
              provide up-to-date information from official websites and literatures to help patients
              better understand their disease and potential treatments.<br /><br />
              通过查询来自文献，美国卫生及公共服务部，美国国立癌症中心的权威信息，帮助病人及家属认识了解疾病以及现有的治疗方法。
            </p>
          </Grid.Column>
          <Grid.Column>
            Image 2
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
