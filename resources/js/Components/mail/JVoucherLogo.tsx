import { getAppUrl } from "@package/helpers/common";
import { Img } from "@react-email/components";

export default function JVoucherLogo() {
    return (
        <Img
            src={`${getAppUrl()}/png/jvoucher-logo.png`}
            width="130"
            alt="JVoucher"
            className="my-20"
        />
    );
}
