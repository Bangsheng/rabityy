import React from 'react';
import { Header } from 'semantic-ui-react';

function Contact() {
  return (
    <div className="contentContainer">
      <Header as="h2">Our Team/我们的团队</Header>
      <p>
        Translation and information collection: (Daisy)Yang Lu<br />
        Technical support: Cheng Chen
        <br /><br />
        翻译以及信息整合：陆杨<br />
        技术支持：陈赪
      </p>
      <Header as="h2">From the Founder/创始人寄语</Header>
      <p>
        I used to help relatives and friends translate their Chinese medical records in order to get diagnosis
        from American doctors. I’ve never imagined there was a huge demand among Chinese patients nowadays to seek
        healthcare solutions in a more advanced system, such as the one here in the US.
        There are even companies specialized in oversea medical trip. However,
        most of the ordinary families cannot afford high travel cost, and even if they can,
        the first thing is to at least make sure that they know what to expect.
        That’s why I worked with my friends and set up the BKG helper website to provide extra help to any
        patients seeking latest information about their diseases. Through my shadowing experience with physicians,
        I learned that patients with thorough understanding of their diseases coped with the situation more
        optimistically and trusted their physicians more, which in turn accelerated the treatment process.
        I hope our website can bridge the language gap and make information available to patients and
        families who have no direct access or prior knowledge to understand the disease.<br /><br />
        我在课余时间会帮家人或朋友翻译病历以方便他们海外就医或咨询。虽然我自己的专业研究涉及乳腺癌，但因为并没有任何临床医学的训练，
        每次大家向我咨询某种病美国怎么治，要多少钱，我都感觉特别无力，因为其实我并不能提供那么多有用的信息给需要的人。
        后来发生了魏则西事件，痛心于他遭遇的同时，有一个细节让我印象深刻。通过在知乎上认识的一个留美研究生，魏则西了解到所谓百度推广，
        医院承诺治愈率达80%-90%，来自斯坦福大学的免疫疗法，在美国因为效率太低，在临床试验阶段就已被淘汰。而魏则西全家，
        在已倾家荡产为他尝试免疫疗法无果之后才得知这样可怕又匪夷所思的消息。事实上如果魏则西能在一开始就找到这个研究生，
        那么很多悲剧也许就能避免。作为一个基础科学的研究生，也许我不能为来自国内的病人提供专业的疾病诊断，但起码可以尽自己所能，
        在提供病历翻译的同时，帮任何有需要的病人查询救命的信息。在“补充资料”板块，我为大家罗列了可以用来全面查询疾病信息的美国官方网站。
        但任何有需要帮助获取翻译信息的朋友，可以直接发邮件给我。
        我能做的也许很少，但我愿意尽最大努力成为那很小的一份，让悲剧不再重演的力量。
      </p>
      <Header as="h2">Contact Us/联系我们</Header>
      <p>
        Contact us at&nbsp;
        <a href="mailto:daisy@bkghelper.com">
          daisy@bkghelper.com
        </a>
        &nbsp;if you need help obtaining information about specific disease.<br /><br />
        如果需要了解某种疾病但查询我们提供的网站有困难，可以写邮件联系我们寻求帮助:&nbsp;
        <a href="mailto:daisy@bkghelper.com">
          daisy@bkghelper.com
        </a>
      </p>
    </div>
  );
}

export default Contact;