import {
    ClipboardIconButton,
    ClipboardInput,
    ClipboardRoot,
} from "@/components/ui/clipboard";
import { InputGroup } from "@/components/ui/input-group";
import { toaster } from "@/components/ui/toaster";

const ClipboardButton = () => {
    return (
        <ClipboardRoot
            maxW="230px"
            value="exeramirez23@gmail.com"
            colorPalette="fg"
        >
            <InputGroup
                width="230px"
                endElement={
                    <ClipboardIconButton
                        color="blackAlpha.950"
                        me="-2"
                        onClick={() => {
                            toaster.create({
                                title: `Mail copiado!`,
                                type: "success",
                            });
                        }}
                    />
                }
            >
                <ClipboardInput border="1px solid #888" />
            </InputGroup>
        </ClipboardRoot>
    );
};

export default ClipboardButton;
