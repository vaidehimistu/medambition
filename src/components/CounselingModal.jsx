import React, { useState } from "react";
import "./CounselingModal.css";

const CounselingModal = () => {
  const [open, setOpen] = useState(false);

  // Data stored securely inside a function (not exposed globally)
  const getCounselingData = () => [
    ["MCC", "Medical Counselling Committee (MCC)", "https://mcc.nic.in/"],
    ["Delhi (IPU)", "Guru Gobind Singh Indraprastha University", "https://ipu.admissions.nic.in"],
    ["Delhi (DU)", "Faculty of Medical Sciences, Delhi", "https://www.fmsc.ac.in/"],
    ["Haryana", "Directorate of Medical Education & Research", "https://uhsrugcounselling.com/"],
    ["UP", "Director General Medical Education and Training", "https://upneet.gov.in/"],
    ["Bihar", "BCECE Board", "https://bceceboard.bihar.gov.in/"],
    ["Rajasthan", "Rajasthan University of Health Sciences", "https://www.rajugneet2024.com/"],
    ["MP", "Department of Medical Education", "https://dme.mponline.gov.in/"],
    ["Uttrakhand", "HNB Uttarakhand Medical Education University", "https://meta-secure.com/HNBUMU_NEETUG"],
    ["Chhatisgarh", "Directorate of Medical Education", "https://www.cgdme.in/"],
    ["Maharashtra", "State CET Cell, Mumbai", "https://cetcell.net.in/NEET-UG-2024/login"],
    ["Himachal Pradesh", "Atal Medical & Research University", "https://amruhp.ac.in/"],
    ["Karnataka", "Karnataka Examination Authority", "https://cetonline.karnataka.gov.in/kea/"],
    ["Telangana", "Kaloji Narayana Rao University Of Health Sciences", "https://www.knruhs.telangana.gov.in/"],
    ["Kerala", "Commissioner of Entrance Examinations", "https://cee.kerala.gov.in/main.php"],
    ["Gujarat", "ACPUGMEC", "https://www.medadmgujarat.org/ug/Home.aspx"],
    ["Andhra Pradesh", "Dr. N.T.R University Of Health Sciences", "http://website.drntruhs.in/index.html"],
    ["Jharkhand", "JCECEB", "https://jceceb.jharkhand.gov.in/"],
    ["Punjab", "BFUHS", "https://bfuhs.ac.in/"],
    ["Tamil Nadu", "Department of Medical Education", "https://tnmedicalselection.net/"],
    ["West Bengal", "Health & Family Welfare", "https://wbmcc.nic.in/ug/HomePage.aspx"],
    ["Sikkim Manipal", "Sikkim Manipal University", "https://smu.edu.in/smims.html/"],
    ["Chandigarh", "Govt. Medical College & Hospital", "https://www.gmch.gov.in/centralized-admission-prospectus-mbbsbdsbhms-courses-session-2024"],
    ["Uttarakhand", "HNB Uttarakhand Medical Education University", "https://www.hnbumu.ac.in/"],
    ["Assam", "Assam State Medical Colleges", "https://dme.assam.gov.in/"],
    ["Meghalaya", "Meghalaya Health Services", "https://meghalaya.gov.in/"],
    ["Tripura", "Tripura Medical College", "https://www.tmcb.tripura.gov.in/"],
    ["Nagaland", "Nagaland University", "https://www.nagaland.gov.in/"],
    ["Mizoram", "Mizoram University", "https://www.mzu.edu.in/"],
    ["Arunachal Pradesh", "AP State Council for Technical Education", "https://apcstcb.in/"],
    ["Andaman & Nicobar Islands", "Directorate of Health Services", "https://health.andaman.gov.in/"],
    ["Jammu & Kashmir", "JKBOPEE", "https://jkbopee.gov.in/"],
  ];

  const data = getCounselingData();

  return (
    <>
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        View NEET 2025 Counseling Links
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>NEET 2025 Counseling Official Websites</h2>
            <table>
              <thead>
                <tr>
                  <th>State</th>
                  <th>Conducting Body</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {data.map(([state, body, url], i) => (
                  <tr key={i}>
                    <td>{state}</td>
                    <td>{body}</td>
                    <td>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="close-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CounselingModal;
