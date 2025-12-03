
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./style/main.min.css";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { UserManagement } from "./pages/usermanagement/UserManagement";
import { FAQ } from "./pages/faq/FAQ";
import { Feedback } from "./pages/feedback/Feedback";
import { Logout } from "./pages/logout/Logout";
import { ManagePlan } from "./pages/manageplan/ManagePlan";
import { Countries } from "./pages/managelocation/countrires/Countries";
import { Cities } from "./pages/managelocation/cities/Cities";
import { Location } from "./pages/managelocation/location/Location";
import { EmailNotification } from "./pages/notifications/email/EmailNotification";
import { SMS } from "./pages/notifications/sms/SmsNotification";
import { GlobalTemplate } from "./pages/notifications/global/GlobalTemplate.";
import { PushNotification } from "./pages/notifications/pushnotification/PushNotification";
import { NotificationTemplates } from "./pages/notifications/templates/NotificationTemplates";
// import { Candidate } from "./pages/candidate/Candidate";
import { VotingCampaign } from "./pages/votingCampaign/VotingCampaign";
import { CoupanTransaction } from "./pages/coupantransaction/CoupanTransaction";
import { CTAddEntry } from "./pages/coupantransaction/add/AddEntry";
import { NAddEntry } from "./pages/notifications/add/AddEntry";
import { VCSAddEntry } from "./pages/votingCampaign/votingcampaignstage/add/AddEntry";
import { VotingCampaignStage } from "./pages/votingCampaign/votingcampaignstage/VotingCampaignstage";
import { VotingCampaignAddEntry } from "./pages/votingCampaign/add/AddEntry";
import { VotingCampaignEditEntry } from "./pages/votingCampaign/edit/EditEntry";
import { VCSEditEntry } from "./pages/votingCampaign/votingcampaignstage/edit/EditEntry";
import { NEditEntry } from "./pages/notifications/edit/EditEntry";
import { CTEditEntry } from "./pages/coupantransaction/edit/EditEntry";
import { Reports } from "./pages/reports/Reports";
import { Notifications } from "./pages/notifications/Notifications";
import { CampaignCandidate } from "./pages/votingCampaign/campaigncandidate/CampaignCandidate";
// import { AllCampaignStage } from "./pages/allcampaignstage/CampaignStage";
import { Votes } from "./pages/votes/Votes";
import { Result } from "./pages/result/Result";
import { VoteTrends } from "./pages/reports/votetrends/VoteTrends";
import { Performance } from "./pages/reports/performance/Performance";
import { CampaignStatus } from "./pages/reports/campaignstatus/CampaignStatus";
import { CAddEntry } from "./pages/votingCampaign/campaigncandidate/add/AddEntry";
import { CEditEntry } from "./pages/votingCampaign/campaigncandidate/edit/EditEntry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manageplan" element={<ManagePlan />} />

          <Route path="/votingcampaign/votes" element={<Votes />} />
          <Route path="/votingcampaign/result" element={<Result />} />

          {/* <Route path="/votingcampaign/campaigncandidate" element={<CampaignCandidate />} /> */}
          <Route path="/votingcampaign/campaigncandidate/:id" element={<CampaignCandidate />} />
          <Route path="/votingcampaign/campaigncandidate/:id/:csid" element={<CampaignCandidate />} />
          <Route path="/votingcampaign/campaigncandidate/:id/addentry" element={<CAddEntry />} />
          <Route path="/votingcampaign/campaigncandidate/:id/edit/:id" element={<CEditEntry />} />

          {/* <Route path="/votingcampaign/candidate/votingstagecandidate" element={<VotingStageCandidate />} />
          <Route path="/votingcampaign/candidate/votingstagecandidate/edit/:id" element={<StageCandidateEditEntry />} />
          <Route path="/votingcampaign/candidate/votingstagecandidate/addentry" element={<StageCandidateAddEntry />} /> */}

          {/* <Route path="/votingcampaign/candidate" element={<Candidate />} />
          <Route path="/votingcampaign/candidate/edit/:id" element={<CEditEntry />} />
          <Route path="/votingcampaign/candidate/addentry" element={<CAddEntry />} /> */}

          <Route path="/votingcampaign" element={<VotingCampaign />} />
          <Route path="/votingcampaign/edit/:id" element={<VotingCampaignEditEntry />} />
          <Route path="/votingcampaign/addentry" element={<VotingCampaignAddEntry />} />

          {/* <Route path="/votingcampaign/votingcampaignstage" element={<AllCampaignStage />} /> */}
          <Route path="/votingcampaign/votingcampaignstage/:id" element={<VotingCampaignStage />} />
          <Route path="/votingcampaign/votingcampaignstage/:id/edit/:id" element={<VCSEditEntry />} />
          <Route path="/votingcampaign/votingcampaignstage/:id/addentry" element={<VCSAddEntry />} />

          <Route path="/votingcampaign/coupan" element={<CoupanTransaction />} />
          <Route path="/votingcampaign/coupan/edit/:id" element={<CTEditEntry />} />
          <Route path="/votingcampaign/coupan/addentry" element={<CTAddEntry />} />

          <Route path="/managelocation/countries" element={<Countries />} />
          <Route path="/managelocation/cities" element={<Cities />} />
          <Route path="/managelocation/location" element={<Location />} />
          <Route path="/managelocation" element={<Location />} />

          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/votetrends" element={<VoteTrends />} />
          <Route path="/reports/performance" element={<Performance />} />
          <Route path="/reports/campaignstatus" element={<CampaignStatus />} />

          <Route path="/user" element={<UserManagement />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications/:id" element={<NEditEntry />} />
          <Route path="/notifications/addentry" element={<NAddEntry />} />

          <Route path="/logout" element={<Logout />} />

          <Route path='/notifications/email' element={<EmailNotification />} />
          <Route path="/notifications/sms" element={<SMS />} />
          <Route path="/notifications/globaltemplate" element={<GlobalTemplate />} />
          <Route path="/notifications/pushnotification" element={<PushNotification />} />
          <Route path="/notifications/notificationtemplate" element={<NotificationTemplates />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
