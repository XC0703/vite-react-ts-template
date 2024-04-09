import styles from './index.module.less';

const ContainerComponent = () => {
	return (
		<div className={styles.containerBox}>
			个人部署学习实践
			<div className={styles.websiteContent}>
				<div>
					<p> Ⅰ 备案所需时长 </p>
					<p>整个备案流程预计所需时长约1~22个工作日左右，具体时长以实际操作时间为准。 </p>
				</div>
				<div>
					<p> Ⅱ个人非营利性网站备案 </p>
					<p>
						备案要求：需要准备所需的可备案服务器，已实名域名、主办单位和备案负责人资料，用于后续管局审核存案。
					</p>
					<p>
						提交申请：可通过服务器提供商（如阿里云、腾讯云、华为云等）或网络提供商（自建服务器的选择）申请提交备案申请。
					</p>
					<p> 备案流程：填写信息 → 人脸核验 → 阿里云初审 → 短信核验 → 管局终审 → 备案后处理。</p>
				</div>
				<div>
					<p>Ⅲ 填写信息</p>
					<p>
						所需提交的个人网站备案证件资料（身份证件）建议都使用身份证，主办单位=网站负责人=主体负责人。后续步骤需要在手机端下载阿里云APP，方便身份照片拍照上传及人脸核验。
					</p>
					<p>
						个人信息、网站负责人、主办单位负责人信息和身份证照片按流程提示填写即可，手机号码都填写自己的同一个注册手机号。
					</p>
					<p>
						备案地域选择：根据你个人的身份证所在地、或实际居住地选择备案提交的地域。是否允许跨省备案，需以各地管局要求为准。
					</p>
					<p>网站名称：需是3个汉字以上命名，不能填写博客、空间、网站、网络、网址、导航、主页等。</p>
					<p>服务类型：一般都是网站应用服务 备注：说明该网站的目的和用途，字数不少于20字。</p>
					<p>网站内容：其它。</p>
				</div>
				<div>
					<p>Ⅳ 人脸核验</p>
					<p> 根据提示，使用阿里云APP进行核验即可。确认无误后提交备案订单。</p>
				</div>
				<div>
					<p>Ⅴ 阿里云初审</p>
					<p>
						提交备案申请后，阿里云备案审核专员会对备案信息初步审核。只要注意按照上述的提示填写网站信息，一般几个小时内都能通过。
						我初审失败后，再次修改网站信息提交，10几分钟后就收到了阿里云客服专员的电话，在确认姓名、备案域名、手机号、身份证后4位正确后，就告诉我备案资料填写正确，通过初审。
						稍后收到阿里云短信提醒备案订单已经提交至管局审核。
					</p>
				</div>
				<div>
					<p>Ⅵ 短信核验</p>
					<p>
						备案订单提交至管局审核时，会收到工信部短信通知，根据提示访问工信部ICP备案网站进行短信核验。
						我是在初审通过的几分钟后收到的短信通知，根据里面的验证码和核验链接，登录工信部官网短信核验页面，输入信息后即提示【尊敬的ICP用户：您的短信核验已全部完成，该请求将提交管局审核。】
					</p>
				</div>
				<div>
					<p>Ⅶ 管局终审 </p>
					<p>原则上，管局审核时间不超过10天。 备案通过后，就能获得ICP备案号了。</p>
				</div>
				<div>
					<p> Ⅷ 备案后处理 </p>
					<p>
						网站备案通过后，你需要将获得的ICP备案号放置在网站首页下方，并链接至工信部备案网址。
						如果网站后台或主题带有相关备案号设置功能，直接按格式填写备案号信息即可。
					</p>
				</div>
			</div>
			<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
				桂ICP备2022008982号-2
			</a>
		</div>
	);
};

export default ContainerComponent;
