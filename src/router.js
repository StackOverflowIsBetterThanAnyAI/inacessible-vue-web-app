import Vue from "vue";
import VueRouter from "vue-router";

import ImgNoAlt from "./components/1.1TextAlternatives.vue";
import InfoRelationship from "./components/1.3.1InfoRelationship.vue";
import MeaningfulSequence from "./components/1.3.2MeaningfulSequence.vue";
import InputPurpose from "./components/1.3.5InputPurpose.vue";
import IdentifyPurpose from "./components/1.3.6IdentifyPurpose.vue";
import UseOfColor from "./components/1.4.1UseOfColor";
import AudioControl from "./components/1.4.2AudioControl";
import ColorContrastMinimum from "./components/1.4.3ColorContrastMinimum";
import TextResize from "./components/1.4.4TextResize";
import ImageOfText from "./components/1.4.5ImageOfText";
import ColorContrastEnhanced from "./components/1.4.6ColorContrastEnhanced.vue";
import VisualPresentation from "./components/1.4.8VisualPresentation.vue";
import NonTextContrast from "./components/1.4.11NonTextContrast.vue";
import TextSpacing from "./components/1.4.12TextSpacing.vue";
import Keyboard from "./components/2.1.1Keyboard.vue";
import KeyboardTrap from "./components/2.1.2KeyboardTrap.vue";
import ShortCut from "./components/2.1.4ShortCut.vue";
import TimeAdjustable from "./components/2.2.1TimeAdjustable";
import PauseStopHide from "./components/2.2.2PauseStopHide";
import ThreeFlashes from "./components/2.3.1ThreeFlashes";
import BypassBlock from "./components/2.4.1BypassBlock.vue";
import FocusOrder from "./components/2.4.3FocusOrder.vue";
import LinkPurpose from "./components/2.4.4LinkPurpose";
import HeadingsLabels from "./components/2.4.6HeadingsLabels";
import LabelInName from "./components/2.5.3LabelInName";
import PageLang from "./components/3.1.3PageLang.vue";
import PartLang from "./components/3.1.2PartLang";
import OnInput from "./components/3.2.2OnInput";
import ConsistentNavigation from "./components/3.2.3ConsistentNavigation";
import ConsistentIdentification from "./components/3.2.4ConsistentIdentification";
import ErrorIdentification from "./components/3.3.1ErrorIdentification";
import LabelsInstructions from "./components/3.3.2LabelsInstructions";
import Parsing from "./components/4.1.1Parsing";
import NameRoleValue from "./components/4.1.2NameRoleValue";
import Status from "./components/4.1.3Status";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: {
            template: "<div>Wähle ein Kriterium aus der Navigation.</div>",
        },
    },
    { path: "/text-alternatives", component: ImgNoAlt },
    { path: "/info-relationship", component: InfoRelationship },
    { path: "/meaningful-sequence", component: MeaningfulSequence },
    { path: "/input-purpose", component: InputPurpose },
    { path: "/identify-purpose", component: IdentifyPurpose },
    { path: "/use-of-color", component: UseOfColor },
    { path: "/audio-control", component: AudioControl },
    { path: "/color-contrast-minimum", component: ColorContrastMinimum },
    { path: "/text-resize", component: TextResize },
    { path: "/image-of-text", component: ImageOfText },
    { path: "/color-contrast-enhanced", component: ColorContrastEnhanced },
    { path: "/visual-presentation", component: VisualPresentation },
    { path: "/non-text-contrast", component: NonTextContrast },
    { path: "/text-spacing", component: TextSpacing },
    { path: "/keyboard", component: Keyboard },
    { path: "/keyboard-trap", component: KeyboardTrap },
    { path: "/shortcut", component: ShortCut },
    { path: "/time-adjustable", component: TimeAdjustable },
    { path: "/pause-stop-hide", component: PauseStopHide },
    { path: "/three-flashes", component: ThreeFlashes },
    { path: "/bypass-block", component: BypassBlock },
    { path: "/focus-order", component: FocusOrder },
    { path: "/link-purpose", component: LinkPurpose },
    { path: "/headings-labels", component: HeadingsLabels },
    { path: "/label-in-name", component: LabelInName },
    { path: "/page-lang", component: PageLang },
    { path: "/part-lang", component: PartLang },
    { path: "/on-input", component: OnInput },
    { path: "/consistent-navigation", component: ConsistentNavigation },
    { path: "/consistent-identification", component: ConsistentIdentification },
    { path: "/error-identification", component: ErrorIdentification },
    { path: "/labels-instructions", component: LabelsInstructions },
    { path: "/parsing", component: Parsing },
    { path: "/name-role-value", component: NameRoleValue },
    { path: "/status", component: Status },
];

export default new VueRouter({
    mode: "history",
    routes,
});
